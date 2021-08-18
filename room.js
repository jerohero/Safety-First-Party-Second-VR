window.addEventListener("DOMContentLoaded", (event) => {
    let index = 0;
    const text = ["Tekst 1", "Tekst 2", "Tekst 3"];
    const textPlane = document.getElementById("textPlane");
    textPlane.setAttribute("text", `value: ${text[index]}`);
    document
        .getElementById("greenArrow")
        .addEventListener("click", function (evt) {
            if (index == text.length - 1) {
                // Add after tutorial things here like picking up facemask
                console.log("the end");
            } else {
                index += 1;
                textPlane.setAttribute("text", `value: ${text[index]}`);
            }
        });
    document
        .getElementById("redArrow")
        .addEventListener("click", function (evt) {
            if (index == 0) {
                textPlane.setAttribute("text", `value: ${text[index]}`);
            } else {
                index -= 1;
                textPlane.setAttribute("text", `value: ${text[index]}`);
                console.log("redklik XD");
            }
        });
});

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
    rig.setAttribute("rotation", { x: 0, y: -90, z: 0 });
    // rig.removeAttribute("movement-controls");
    // rig.setAttribute("scale", { x: 0.33, y: 1, z: 1 });
    rig.setAttribute("position", { x: -5.241, y: -0.1, z: 1.1 });
    camera.setAttribute("position", { x: 0, y: 1, z: 0 });
    cursor.setAttribute("position", this.roomCursorPos);
};
