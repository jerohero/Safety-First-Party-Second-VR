AFRAME.registerComponent("room", {
    init: () => {
        initRoom();
    },
    remove: () => {
        console.log("REMOVE ROOM");
    },
});

defaultCursorPos = { x: 0, y: 0, z: 0 };
roomCursorPos = { x: 0, y: 0, z: -0.4 };

const initRoom = () => {
    let camera = document.getElementById("camera");
    let rig = document.getElementById("rig");
    let cursor = document.getElementById("cursor");
    const redArrow = document.getElementById("red-arrow");
    const greenArrow = document.getElementById("green-arrow");

    // redArrow.setAttribute("position", { x: -2.8, y: 0.9, z: -5.3 });
    // greenArrow.setAttribute("position", { x: -2.8, y: 0.9, z: -5.3 });
    rig.setAttribute("rotation", { x: 0, y: 90, z: 0 });
    // rig.removeAttribute("movement-controls");

    camera.setAttribute("position", { x: -2.8, y: 0.9, z: -5.3 });

    cursor.setAttribute("position", this.roomCursorPos);
};
