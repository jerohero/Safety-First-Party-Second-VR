AFRAME.registerComponent("onclicks", {
    init: function () {
        const cursor = document.getElementById("cursor");
        console.log("in here");
        this.el.addEventListener("mouseenter", function (event) {
            cursor.setAttribute("color", "red");
            console.log("init");
        });

        this.el.addEventListener("mouseleave", function (event) {
            cursor.setAttribute("color", "black");
        });
    },
});
