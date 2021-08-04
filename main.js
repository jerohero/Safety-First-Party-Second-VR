let rig;

window.onload = () => {
    const collisionTests = document.getElementsByClassName('collisionTest')
    rig = document.getElementById('rig')

    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', playerHit)
    }
}

const playerHit = (e) => {
    console.log('Player has been hit');
}
