AFRAME.registerComponent('dev', {
    init: function () {
        init()
    },
});
const init = () => {
    console.log('in dev.js')
    const collisionTests = document.getElementsByClassName('collisionTest')

    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', playerHit)
    }
}

const playerHit = (e) => {
    console.log('Player has been hit')
}
