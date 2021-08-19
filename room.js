window.addEventListener("DOMContentLoaded", (event) => {
    let index = 0;
    const text = [
        "Welkom bij Safety First, Party Second. Hierin gaan wij jullie speelsgewijs demonstreren hoe je veilig naar een festival kan gaan zonder corona regels te verbreken.\n\n U kunt naar de volgende dia gaan door 2 seconden naar de groene pijl te kijken, en terug door naar de rode pijl te kijken",
        "Er zijn verder ook een aantal regels waar je je aan moet houden:\n\n1. Draag een mondkapje\n2. Breng een negatieve corona test of vacinnatiebewijs\n3. Hou anderhalf meter afstand\n4. Maximaal 750 bezoekers mogen aanwezig zijn\n5. Was je handen zo vaak mogelijk\n6. Gebruik desinfecteer middel voordat je naar openbare plekken gaat.",
        "Nu hebben wij een applicatie gebouwd waarbij je speelsgewijs een aantal van deze corona regels leert toepassen.\n\n Allereerst leer je hoe het loopmechanisme werkt. Dit is heel simpel, want je loopt namelijk automatisch naar de richting waar je naartoe kijkt. Dit gebeurd ook gelijk na deze tutorial op deze kamer. Hier maak je dus kennis met het lopen en het oppakken van spullen.",
        "Wanneer je de movement onder de knie hebt gekregen kan je vervolgens door de deur lopen om te eindigen bij het festival.\n\n Hier leren wij jullie om anderhalf meter afstand te houden van. Je kan maximaal drie keer tegen een persoon aanlopen voordat je opnieuw het level moet doen. Je kan deze teller verminderen door desinfecteer middel op te pakken bij het festival",
        "Het doel bij het festival is uiteindelijk jezelf zo veilig mogelijk te verplaatsen naar de biertent.\n\n Wanneer je dit hebt gedaan heb je het level dus gehaald en komt de applicatie ook tot een einde. Je weet dan goed hoe je je moet houden aan de coronaregels tijdens een echte festival.",
        "Dit is het einde van de tutorial, om te beginnen kan je over de groene pijl zweven.\n\n Vergeet ook niet om je mondkapje mee te nemen uit je kamer voordat je naar de festival gaat...",
    ];

    const textPlane = document.getElementById("textPlane");
    textPlane.setAttribute("text", `value: ${text[index]}`);

    const pickupMask = (e) => {
        document
            .getElementById("room-door")
            .setAttribute("position", { x: -0.007, y: 0.5, z: 1.029 });
        // position = "-0.007 0.500 1.029";
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
                rig.setAttribute("position", { x: -5.241, y: 0.293, z: 1.1 });
                rig.setAttribute("rotation", { x: 0, y: -90, z: 0 });
                rig.setAttribute("movement-controls", "speed: 0.001;");
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
    rig.setAttribute("position", { x: -5.35, y: -0.1, z: 2.8 });

    camera.setAttribute("position", { x: 0, y: 1, z: 0 });
    cursor.setAttribute("position", this.roomCursorPos);
};

const removeRoom = () => {
    document.getElementById("player-exposure").setAttribute("visible", true);
    document.getElementById("mask-counter").setAttribute("visible", false);
    document.getElementById("player-ring").setAttribute("scale", "1 1 1");

    rig.setAttribute("rotation", { x: 0, y: 180, z: 0 });
    rig.setAttribute("position", { x: 0, y: 0, z: 0 });
    camera.setAttribute("position", { x: 0, y: 1.7, z: 0 });
    camera.setAttribute("rotation", { x: 0, y: 0, z: 0 });
};
