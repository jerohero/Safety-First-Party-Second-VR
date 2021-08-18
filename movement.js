AFRAME.registerComponent("movement", {
    tick: function () {
        let rig = document.getElementById("rig");
        let pos = rig.getAttribute("position");
        let newPos = new THREE.Vector3();

        this.el.sceneEl.camera.getWorldDirection(newPos);
        newPos.multiplyScalar(0.001);
        pos.add(newPos);
        rig.setAttribute("position", { x: pos.x, y: -0.1, z: pos.z });
    },
});

AFRAME.registerComponent("autowalk-controls", {
    isVelocityActive: function () {
        return true;
    },
    getVelocityDelta: function () {
        return new THREE.Vector3(0, 0, -1);
    },
});
