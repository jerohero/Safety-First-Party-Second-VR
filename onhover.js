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

AFRAME.registerComponent("clickable", {
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