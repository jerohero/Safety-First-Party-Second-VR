let rig;

window.onload = () => {
    const collisionTests = document.getElementsByClassName('collisionTest')
    rig = document.getElementById('rig')

    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', playerHit)
    }

    randomEnemies()
}

const playerHit = (e) => {
    console.log('Player has been hit')
}

const randomEnemies = () => {
    var enemies = [],
        enemy = {},
        overlapping = false,
        maxEnemies = 200,
        protection = 10000,
        counter = 0

    while (enemies.length < maxEnemies && counter < protection) {
        enemy = {
            x: Math.floor(Math.random() * 101),
            z: Math.floor(Math.random() * 101),
            r: 10
        }
        overlapping = false

        for (var i = 0; i < enemies.length; i++) {
            var existing = enemies[i]
            var d = Math.sqrt((enemy.x - existing.x) ** 2 + (enemy.y - existing.y) ** 2)
            if (d < enemy.r + existing.r) {
                overlapping = true;
                break;
            }
        }
        
        if (!overlapping) {
            enemies.push(enemy)
        }
        
        counter++
    }
}
