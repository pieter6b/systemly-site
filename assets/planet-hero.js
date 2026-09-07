/* Local assets only. No pan/zoom: interaction rotates the planet, never its position. */
const hero = document.querySelector('[data-planet]');
if (hero) init().catch(() => {
  // The pre-rendered image remains visible if WebGL or a required asset fails.
  hero.querySelector('.planet-controls').hidden = true;
});

async function init() {
  const THREE = await import('./vendor/three.module.min.js');
  const stage = hero.querySelector('.planet-stage');
  const isEarth = hero.dataset.planet === 'earth';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 899px)');
  const saveData = navigator.connection?.saveData;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x07090d, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', `Draaibare ${isEarth ? 'aarde' : 'maan'}. Sleep horizontaal, of gebruik de pijltjestoetsen. Op een aanraakscherm blijft verticaal scrollen beschikbaar.`);
  canvas.setAttribute('aria-describedby', 'planet-instruction');
  stage.append(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 30);
  camera.position.set(0, 0, 4.4);
  const planet = new THREE.Group();
  scene.add(planet);
  const geometry = new THREE.SphereGeometry(1, 128, 96);
  const loader = new THREE.TextureLoader();
  const ownedTextures = [];
  const resolution = compact.matches || saveData || renderer.capabilities.maxTextureSize < 4096 ? 2048 : 4096;
  async function texture(name, color = true) {
    const map = await loader.loadAsync(`/assets/space/${name}-${resolution}.webp`);
    if (color) map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    ownedTextures.push(map);
    return map;
  }
  const light = new THREE.Vector3(-3.5, 2, 3.2).normalize();
  const vertex = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(mat3(modelMatrix) * normal);
      vec4 world = modelMatrix * vec4(position, 1.0);
      vPosition = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `;
  let clouds;
  try {
    if (isEarth) {
      const [day, night, cloud] = await Promise.all([texture('earth-day'), texture('earth-night'), texture('earth-clouds', false)]);
      const surface = new THREE.ShaderMaterial({
        uniforms: { dayMap: { value: day }, nightMap: { value: night }, sunDirection: { value: light } },
        vertexShader: vertex,
        fragmentShader: `
          uniform sampler2D dayMap;
          uniform sampler2D nightMap;
          uniform vec3 sunDirection;
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec3 n = normalize(vNormal);
            vec3 eye = normalize(cameraPosition - vPosition);
            float sunlight = dot(n, sunDirection);
            vec3 land = texture2D(dayMap, vUv).rgb;
            vec3 cities = texture2D(nightMap, vUv).rgb;
            float day = smoothstep(-0.12, 0.2, sunlight);
            vec3 color = land * (0.014 + max(sunlight, 0.0) * 1.45);
            color += cities * (1.0 - day) * 1.25;
            float ocean = smoothstep(0.015, 0.09, land.b - max(land.r, land.g));
            float specular = pow(max(dot(n, normalize(sunDirection + eye)), 0.0), 60.0);
            color += vec3(0.48, 0.65, 0.8) * specular * ocean * day * 0.6;
            float rim = pow(1.0 - max(dot(n, eye), 0.0), 3.5);
            color += vec3(0.11, 0.32, 0.65) * rim * smoothstep(-0.2, 0.5, sunlight) * 0.45;
            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `
      });
      planet.add(new THREE.Mesh(geometry, surface));
      clouds = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xffffff, alphaMap: cloud, transparent: true, opacity: .87, depthWrite: false, shininess: 0 }));
      clouds.scale.setScalar(1.006);
      planet.add(clouds);
      const atmosphere = new THREE.Mesh(geometry, new THREE.ShaderMaterial({
        uniforms: { sunDirection: { value: light } }, vertexShader: vertex,
        fragmentShader: `
          uniform vec3 sunDirection;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec3 n = normalize(vNormal);
            vec3 eye = normalize(cameraPosition - vPosition);
            float rim = pow(1.0 - max(dot(n, eye), 0.0), 4.0);
            float sun = smoothstep(-0.25, 0.7, dot(n, sunDirection));
            gl_FragColor = vec4(0.2, 0.5, 1.0, rim * sun * 0.52);
          }
        `,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
      }));
      atmosphere.scale.setScalar(1.018);
      planet.add(atmosphere);
    } else {
      const color = await texture('moon');
      // Albedo detail adds subtle relief; not a scientific elevation model.
      const bump = color.clone();
      bump.colorSpace = THREE.NoColorSpace;
      bump.needsUpdate = true;
      ownedTextures.push(bump);
      planet.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ map: color, bumpMap: bump, bumpScale: .018, roughness: 1, metalness: 0 })));
    }
  } catch (error) {
    renderer.dispose(); geometry.dispose(); ownedTextures.forEach(t => t.dispose()); canvas.remove();
    throw error;
  }
  const sun = new THREE.DirectionalLight(0xfff5e9, isEarth ? 2.4 : 3.1);
  sun.position.copy(light).multiplyScalar(5);
  scene.add(sun, new THREE.AmbientLight(0x8e9eb5, isEarth ? .1 : .045));

  let targetY = isEarth ? -1.15 : -1.7;
  let targetX = isEarth ? .12 : .06;
  planet.rotation.set(targetX, targetY, isEarth ? -.16 : -.08, 'YXZ');
  let paused = reduced.matches || Boolean(saveData);
  let visible = true, contextLost = false, disposed = false, frameId = 0, lastFrame = 0, lastInteraction = 0;
  let drag = null;
  const controls = hero.querySelector('.planet-controls');
  const pause = hero.querySelector('.planet-pause');
  function syncPause() {
    pause.textContent = paused ? 'Afspelen' : 'Pauze';
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused ? 'Automatisch draaien hervatten' : 'Automatisch draaien pauzeren');
  }
  syncPause();
  function resize() {
    const size = Math.max(1, stage.clientWidth);
    // Keep 4K texture detail on desktop; cap the mobile drawing buffer for battery life.
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, compact.matches ? 1.5 : 2, Math.sqrt((compact.matches ? 1800000 : 8300000) / (size * size))));
    renderer.setSize(size, size, false);
    requestRender();
  }
  function requestRender() {
    if (!frameId && !disposed && !contextLost && visible && !document.hidden) frameId = requestAnimationFrame(render);
  }
  function render(now) {
    frameId = 0;
    if (disposed || contextLost || !visible || document.hidden) return;
    const dt = Math.min((now - lastFrame) / 1000 || .016, .05);
    lastFrame = now;
    const auto = !paused && !drag && now - lastInteraction > 4000;
    if (auto) { targetY += dt * .035; if (clouds) clouds.rotation.y += dt * .006; }
    const ease = reduced.matches ? 1 : 1 - Math.exp(-12 * dt);
    planet.rotation.x += (targetX - planet.rotation.x) * ease;
    planet.rotation.y += (targetY - planet.rotation.y) * ease;
    renderer.render(scene, camera);
    const settling = Math.abs(targetX - planet.rotation.x) + Math.abs(targetY - planet.rotation.y) > .0001;
    if (!paused || settling) requestRender();
  }
  function interact() { lastInteraction = performance.now(); requestRender(); }
  canvas.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, kind: e.pointerType };
    canvas.setPointerCapture(e.pointerId);
    interact();
  });
  canvas.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const scale = 4 / stage.clientWidth;
    targetY += (e.clientX - drag.x) * scale;
    // Native pan-y owns vertical touch movement; mouse/pen can also tilt.
    if (drag.kind !== 'touch') targetX = THREE.MathUtils.clamp(targetX + (e.clientY - drag.y) * scale, -1.2, 1.2);
    drag.x = e.clientX; drag.y = e.clientY;
    interact();
  });
  function endDrag(e) {
    if (drag?.id !== e.pointerId) return;
    drag = null;
    if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    interact();
  }
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('lostpointercapture', endDrag);
  canvas.addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    e.preventDefault();
    if (e.key === 'ArrowLeft') targetY -= .15;
    if (e.key === 'ArrowRight') targetY += .15;
    if (e.key === 'ArrowUp') targetX = Math.max(-1.2, targetX - .12);
    if (e.key === 'ArrowDown') targetX = Math.min(1.2, targetX + .12);
    interact();
  });
  pause.addEventListener('click', () => { paused = !paused; syncPause(); requestRender(); });
  reduced.addEventListener('change', e => { paused = e.matches; syncPause(); requestRender(); });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!visible) { cancelAnimationFrame(frameId); frameId = 0; drag = null; }
    else { lastFrame = performance.now(); requestRender(); }
  });
  observer.observe(hero);
  const onVisibility = () => {
    if (document.hidden) { cancelAnimationFrame(frameId); frameId = 0; drag = null; }
    else { lastFrame = performance.now(); requestRender(); }
  };
  document.addEventListener('visibilitychange', onVisibility);
  const resizer = new ResizeObserver(resize);
  resizer.observe(stage);
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault(); contextLost = true; cancelAnimationFrame(frameId); frameId = 0;
    stage.classList.remove('is-ready'); controls.hidden = true;
  });
  canvas.addEventListener('webglcontextrestored', () => {
    contextLost = false; resize(); stage.classList.add('is-ready'); controls.hidden = false;
  });
  window.addEventListener('pagehide', e => {
    cancelAnimationFrame(frameId); frameId = 0;
    if (e.persisted) return;
    disposed = true; observer.disconnect(); resizer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    geometry.dispose(); ownedTextures.forEach(t => t.dispose());
    planet.traverse(o => { if (o.material) o.material.dispose(); });
    renderer.dispose();
  });
  window.addEventListener('pageshow', () => { lastFrame = performance.now(); requestRender(); });
  resize();
  // First frame is painted before the photographic fallback fades out.
  renderer.render(scene, camera);
  stage.classList.add('is-ready'); controls.hidden = false;
  if (compact.matches) hero.querySelector('.planet-instruction').textContent = `Veeg opzij om de ${isEarth ? 'aarde' : 'maan'} te draaien`;
}
