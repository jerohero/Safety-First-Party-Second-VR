AFRAME.registerComponent('dev', {
    init: function () {
        init()
    },
});
const init = () => {
    console.log('in dev.js')
    const collisionTests = document.getElementsByClassName('collisionTest')

    console.log(document.getElementsByClassName('collisionTest').length);

    console.log(collisionTests.length);
    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', hitPlayer)
    }
}

const hitPlayer = (e) => {
    console.log('Player has been hit')
}
