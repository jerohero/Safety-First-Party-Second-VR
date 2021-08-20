window.addEventListener("DOMContentLoaded", (event) => {
    let index = 0;
    const text = [
        "Welkom bij Safety First, Party Second. Hierin word je op een entertainende wijze gedemonstreerd hoe je veilig volgens de COVID-19 maatregelen festivals kunt bezoeken.\n\nJe kunt naar de volgende dia gaan door 2 seconden naar de groene pijl links te staren, en terug te gaan door naar de rode pijl rechts te staren.",
        "De volgende COVID-19 maatregelen gelden bij festivals:\n\n1. Draag een mondkapje\n2. Breng een negatieve COVID-19-testuitslag of vaccinatiebewijs\n3. Houd anderhalve meter afstand van anderen\n4. Reinig uw handen zo vaak mogelijk\n5. Gebruik desinfectiemiddel voordat u naar openbare plekken gaat.",
        "Je gaat zometeen naar een festival toe, en het is jouw doel om daar bier te bestellen.\n\nJe kunt straks navigeren door simpelweg de richting op te kijken waar je naartoe wilt. Het is dan de bedoeling dat je anderhalve meter afstand houdt van andere festivalgangers.",
        "Wanneer je te dicht bij andere personen komt, zal je blootstelling omhoog gaan.\n\nHet spel is voorbij wanneer je blootstelling de 3 bereikt, dus let goed op!\n\nVerlaag je blootstelling door desinfectiemiddelen op te pakken die over de locatie zijn verspreid.",
        "Laat het feest niet langer wachten, op naar de deur! Vergeet je je mondkapje niet?"
    ];

    const textPlane = document.getElementById("textPlane");
    textPlane.setAttribute("text", `value: ${text[index]}`);

    const pickupMask = (e) => {
        document
            .getElementById("room-door")
            .setAttribute("position", { x: -0.007, y: 0.5, z: 1.029 });
        document
            .getElementById("closed-door")
            .setAttribute("position", { x: -3.069, y: 2.808, z: -7.247 });
        document
            .getElementById("mask-counter")
            .setAttribute("text", "value: 1/1");

        e.target.remove();
    };

    document
        .getElementById("greenArrow")
        .addEventListener("click", function (evt) {
            if (index == text.length - 1) {
                let rig = document.getElementById("rig");
                rig.setAttribute("position", { x: -5.241, y: -.5, z: 1.1 });
                rig.setAttribute("rotation", { x: 0, y: -90, z: 0 });
                rig.setAttribute("movement-controls", "speed: 0.02;");
                rig.setAttribute("movement", "");
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
            }
        });

    document
        .getElementById("mask-model")
        .addEventListener("hitstart", pickupMask);
});

AFRAME.registerComponent("room", {
    init: () => {
        initRoom();
    },
    remove: () => {
        removeRoom();
    },
});

defaultCursorPos = { x: 0, y: 0, z: 0 };
roomCursorPos = { x: 0, y: 0, z: -0.4 };

const initRoom = () => {
    let camera = document.getElementById("camera");
    let rig = document.getElementById("rig");
    let cursor = document.getElementById("cursor");
    let hitbox = document.getElementById("hitbox");
    let playerRing = document.getElementById("player-ring");

    playerRing.setAttribute("scale", "0.240 0.290 0.850");
    rig.setAttribute("rotation", { x: 0, y: 90, z: 0 });
    rig.setAttribute("movement-controls", "speed: 0");
    rig.setAttribute("position", { x: -5.35, y: -.5, z: 2.8 });

    camera.setAttribute("position", { x: 0, y: 1.3, z: 0 });
    cursor.setAttribute("position", this.roomCursorPos);
};

const removeRoom = () => {
    document.getElementById("player-exposure").setAttribute("visible", true);
    document.getElementById("mask-counter").setAttribute("visible", false);
    document.getElementById("player-ring").setAttribute("scale", "1 1 1");
    document.getElementById("hitbox").setAttribute("opacity", "0");

    rig.setAttribute("movement-controls", "speed: .12");
    rig.setAttribute("rotation", { x: 0, y: -360, z: 0 });
    rig.setAttribute("position", { x: 0, y: 0, z: 0 });
    camera.setAttribute("position", { x: 0, y: 1.3, z: 0 });
    camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
};
