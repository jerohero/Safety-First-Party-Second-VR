AFRAME.registerComponent("room", {
    init: function () {
        startMoment();
    },
});
const startMoment = () => {
    document
        .getElementById("camera")
        .setAttribute("position", { x: -2.8, y: 0.9, z: -5.3 });
    document
        .getElementById("rig")
        .setAttribute("rotation", { x: 0, y: 90, z: 0 });
    document.getElementById("camera").setAttribute("wasd-controls", false);
};
