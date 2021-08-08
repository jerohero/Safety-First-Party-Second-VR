window.addEventListener("DOMContentLoaded", (event) => {
    let index = 0;
    const text = ["Tekst 1", "Tekst 2", "Tekst 3"];
    const textPlane = document.getElementById("textPlane");
    textPlane.setAttribute("text", `value: ${text[index]}`);
    document
        .getElementById("greenArrow")
        .addEventListener("click", function (evt) {
            index += 1;
            console.log(text[index]);
            textPlane.setAttribute("text", `value: ${text[index]}`);
            console.log("klik XD");
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

AFRAME.registerComponent("onhovergreen", {
    init: function () {
        const cursor = document.getElementById("cursor");

        this.el.addEventListener("mouseenter", (event) => {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", (event) => {
            cursor.setAttribute("color", "black");
        });
    },
});

AFRAME.registerComponent("onhoverred", {
    init: function () {
        const cursor = document.getElementById("cursor");
        let i = 0;

        this.el.addEventListener("mouseenter", (event) => {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", (event) => {
            cursor.setAttribute("color", "black");
        });
    },
});
