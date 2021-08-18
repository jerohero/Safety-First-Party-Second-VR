let rig;
let scenes;

window.addEventListener("DOMContentLoaded", (event) => {
    rig = document.getElementById("rig");

    scenes = {
        room: document.getElementById("room-scene"),
        festival: document.getElementById("festival-scene"),
    };

    toIntroScene();
    document
        .getElementById("room-door")
        .addEventListener("hitstart", doorInteraction);
    // toFestivalScene()
});

const doorInteraction = () => {
    toFestivalScene();
};

const toIntroScene = () => {
    scenes.room.setAttribute("visible", "true");
    scenes.festival.setAttribute("visible", "false");
};

const toFestivalScene = () => {
    scenes.room.removeAttribute("room");
    scenes.room.setAttribute("visible", "false");
    scenes.festival.setAttribute("visible", "true");

    document.getElementById("room-navmesh").removeAttribute("nav-mesh");
    document.getElementById("festival-navmesh").setAttribute("nav-mesh", "");
    document.getElementById("hitbox").setAttribute("scale", "1 1 1");
    document.getElementById("player-ring").setAttribute("opacity", "1");
    document.getElementById("festival-music").components.sound.playSound();
};
