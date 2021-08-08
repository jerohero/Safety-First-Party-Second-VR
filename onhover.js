AFRAME.registerComponent("onhovergreen", {
    init: function () {
        const cursor = document.getElementById("cursor");
        let i = 0;

        this.el.addEventListener("mouseenter", (event) => {
            cursor.setAttribute("color", "red");
        });

        this.el.addEventListener("click", (event) => {
            cursor.setAttribute("color", "red");
            i += 1;
            console.log("green arrow", i);
            event.stopPropagation();
            event.preventDefault();
        });

        this.el.addEventListener("mouseleave", (event) => {
            cursor.setAttribute("color", "black");
            event.stopPropagation();
            event.preventDefault();
        });
    },
});

AFRAME.registerComponent("onhoverred", {
    init: function () {
        const cursor = document.getElementById("cursor");
        let i = 0;

        this.el.addEventListener("mouseenter", (event) => {
            cursor.setAttribute("color", "red");
        });

        this.el.addEventListener("click", (event) => {
            cursor.setAttribute("color", "red");
            i += 1;
            console.log("red arrow", i);
            event.stopPropagation();
            event.preventDefault();
        });

        this.el.addEventListener("mouseleave", (event) => {
            cursor.setAttribute("color", "black");
            event.stopPropagation();
            event.preventDefault();
        });
    },
});
