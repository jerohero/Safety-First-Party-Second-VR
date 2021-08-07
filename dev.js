AFRAME.registerComponent('dev', {
    init: function () {
        initDev()
    },
});
const initDev = () => {
    let camera = document.getElementById("camera")
    let rig = document.getElementById("rig")
    let cursor = document.getElementById("cursor")

    const collisionTests = document.getElementsByClassName('collisionTest')
    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', hitPlayer)
    }
}

const hitPlayer = (e) => {
    console.log('Player has been hit')
}
