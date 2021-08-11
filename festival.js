AFRAME.registerComponent('festival', {
    init: function () {
        initFestival()
    }
});

const initFestival = () => {
    this.exposure = 0
    this.MAX_EXPOSURE = 3

    document.getElementsByClassName('collisionTest')[0].addEventListener('hitstart', hitPlayer)

    randomEnemies()
}

const restart = () => {
    hideFailScreen()
    document.getElementById('rig').setAttribute('position', '0 0 0')
    setPlayerExposure(0)

    console.log('restart')
}

const hitPlayer = () => {
    setPlayerExposure(this.exposure + 1)

    if (this.exposure >= this.MAX_EXPOSURE) {
        showFailScreen()

        return
    }
}

const showFailScreen = () => {
    document.getElementById('fail-screen').setAttribute('visible', 'true')
    document.getElementById('enemies').setAttribute('visible', 'false')
    document.getElementById('player-exposure').setAttribute('visible', 'false')
    document.getElementById('restart-button').setAttribute('clickable', 'true')
    document.getElementById('restart-button').addEventListener('click', (evt) => {
        restart()
    })
    // todo disable movement
}

const hideFailScreen = () => {
    document.getElementById('fail-screen').setAttribute('visible', 'false')
    document.getElementById('enemies').setAttribute('visible', 'true')
    document.getElementById('player-exposure').setAttribute('visible', 'true')
    document.getElementById('restart-button').removeAttribute('clickable')
}

const setPlayerExposure = (newExposure) => {
    this.exposure = newExposure
    let playerExposure = document.getElementById('player-exposure')

    let color
    switch (newExposure) {
        case 0:
            color = 'green'
            break
        case 1:
            color = 'orange'
            break
        default:
            color = 'red'
            break
    }

    playerExposure.setAttribute('text', `value: ${newExposure}/${this.MAX_EXPOSURE}; align: center; color: ${color}; width: .6;`)
}

const randomEnemies = () => {
    const enemiesEl = document.getElementById('enemies')
    const enemies = generateEnemiesList()
    const test = document.getElementsByClassName('collisionTest')[0]
    const colors = ['red', 'blue', 'yellow', 'pink', 'purple', 'green']

    enemies.forEach((enemy) => {
        const e = test.cloneNode(true)
        e.setAttribute('position', { x: enemy.x, y: -.2, z: enemy.z })
        e.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
        e.addEventListener('hitstart', hitPlayer)

        enemiesEl.appendChild(e)
    })
}

const generateEnemiesList = () => {
    var enemies = [],
        enemy = {},
        overlapping = false,
        maxEnemies = 50,
        protection = 10000,
        counter = 0

    while (enemies.length < maxEnemies && counter < protection) {
        enemy = {
            x: Math.floor(Math.random() * 201),
            z: Math.floor(Math.random() * 201),
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

    return enemies
}