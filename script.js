console.log("🔥 Scroll-driven animation start");

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

let scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);

const camera = new BABYLON.ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 2.3,
    6,
    BABYLON.Vector3.Zero(),
    scene
);

camera.inputs.clear();
camera.lowerRadiusLimit = 6;
camera.upperRadiusLimit = 6;

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0), scene);
light.intensity = 1.2;

let carModel = null;

BABYLON.SceneLoader.ImportMesh(
    "",
    "./",
    "free.glb",
    scene,
    (meshes) => {
        carModel = meshes[0];

        // базовые параметры до анимации
        carModel.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
        carModel.position = new BABYLON.Vector3(0, 0, 0);
        carModel.rotation = new BABYLON.Vector3(0, 0, 0);

        // центрируем
        const bounds = carModel.getHierarchyBoundingVectors();
        const center = bounds.min.add(bounds.max).scale(0.5);
        carModel.position = carModel.position.subtract(center);

        console.log("✔ Машина загружена и готова к анимации");
    }
);

// Управляем движением модели по скроллу
window.addEventListener("scroll", () => {
    if (!carModel) return;

    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;

    // НОРМИРУЕМ значение от 0 до 1
    let t = Math.min(scrollY / sectionHeight, 1);

    // Анимация размеров
    let scale = 1.2 - t * 0.6;   // 1.2 → 0.6
    carModel.scaling = new BABYLON.Vector3(scale, scale, scale);

    // Анимация позиции: вправо и вниз
    carModel.position.x = t * 3;     // 0 → 3
    carModel.position.y = -t * 1.5;  // 0 → -1.5

    // Анимация разворота корпуса
    carModel.rotation.y = t * 1.5;   // 0 → 1.5 (~90°)

});

// РЕНДЕР
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
