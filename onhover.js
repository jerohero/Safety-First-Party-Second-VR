AFRAME.registerComponent("clickable", {
    init: function () {
        const cursor = document.getElementById("cursor");

        this.el.addEventListener("mouseenter", (event) => {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", (event) => {
            cursor.setAttribute("color", "purple");
        });
    },
});
