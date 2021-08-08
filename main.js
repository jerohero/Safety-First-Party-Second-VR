let rig
let scenes

window.onload = () => {
    rig = document.getElementById('rig')

    scenes = {
        room: document.getElementById('room-scene'),
        festival: document.getElementById('dev-scene')
    }

    toIntroScene()
    // toFestivalScene()

    randomEnemies()
}

const toIntroScene = () => {
    scenes.room.setAttribute('visible', 'true')
    scenes.festival.setAttribute('visible', 'false')
}

const toFestivalScene = () => {
    scenes.room.removeAttribute('room')
    scenes.room.setAttribute('visible', 'false')
    scenes.festival.setAttribute('visible', 'true')
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
