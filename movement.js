AFRAME.registerComponent("movement", {
    tick: function () {
        let player = document.getElementById("rig");
        var direction = new THREE.Vector3();
        this.el.sceneEl.camera.getWorldDirection(direction);
        direction.multiplyScalar(0.001);
        var pos = player.getAttribute("position");
        pos.add(direction);
        // this.el.object3D.position.x = pos.x;
        // this.el.object3D.position.z = pos.z;
        // this.el.object3D.position.y = -0.1;
        player.setAttribute("position", { x: pos.x, y: -0.1, z: pos.z });
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
