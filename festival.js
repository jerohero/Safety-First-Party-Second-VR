AFRAME.registerComponent('festival', {
    init: function () {
        initFestival()
    }
});

const initFestival = () => {
    this.exposure = 0
    this.MAX_EXPOSURE = 3

    document.getElementsByClassName('enemyTemplate')[0].addEventListener('hitstart', hitPlayer)
    document.getElementById('finish').addEventListener('hitstart', endReached)

    initCheckpoints()
    // randomEnemiesForArea(2, {x: 81, z: 51, amount: 200})
}

const initCheckpoints = () => {
    const areas = {
        area1: {width: 81, height: 51, amount: 80, position: { x: 0, y: 0, z: 0 }},
        area2: {width: 81, height: 51, amount: 90, position: { x: 0, y: 0, z: -50 }},
        area3: {width: 81, height: 51, amount: 100, position: { x: 0, y: 0, z: -100 }},
        area4: {width: 81, height: 51, amount: 90, position: { x: -85, y: 0, z: -47 }},
        area5: {width: 81, height: 51, amount: 100, position: { x: -82, y: 0, z: -100 }}
    }

    randomEnemiesForArea(1, {width: 81, height: 51, amount: 100, position: { x: 0, y: 0, z: 0 }})

    document.getElementById('checkpoint-area2').addEventListener('hitstart', () => {
        if (this.activeCheckpoint === 1) {
            randomEnemiesForArea(2, areas.area2)
        } else {
            randomEnemiesForArea(1, areas.area1)
        }
    })

    document.getElementById('checkpoint-area3').addEventListener('hitstart', () => {
        if (this.activeCheckpoint === 2) {
            randomEnemiesForArea(3, areas.area3)
        } else {
            randomEnemiesForArea(2, areas.area2)
        }
    })

    document.getElementById('checkpoint-area4').addEventListener('hitstart', () => {
        if (this.activeCheckpoint === 2) {
            randomEnemiesForArea(4, areas.area4)
        } else {
            randomEnemiesForArea(2, areas.area2)
        }
    })

    document.getElementById('checkpoint-area5').addEventListener('hitstart', () => {
        if (this.activeCheckpoint === 4) {
            randomEnemiesForArea(5, areas.area5)
        } else {
            randomEnemiesForArea(4, areas.area4)
        }
    })

    document.getElementById('checkpoint-area3-5').addEventListener('hitstart', () => {
        if (this.activeCheckpoint === 3) {
            randomEnemiesForArea(5, areas.area5)
        } else {
            randomEnemiesForArea(3, areas.area3)
        }
    })
}

const restart = () => {
    hideScreens()
    document.getElementById('rig').setAttribute('position', '0 0 0')
    setPlayerExposure(0)
    randomEnemiesForArea(1, {width: 81, height: 51, amount: 100, position: { x: 0, y: 0, z: 0 }})
}

const hitPlayer = () => {
    setPlayerExposure(this.exposure + 1)

    if (this.exposure >= this.MAX_EXPOSURE) {
        showFailScreen()

        return
    }
}

const endReached = () => {
    document.getElementById('win-screen').setAttribute('visible', 'true')
    document.getElementById('enemies').setAttribute('visible', 'false')
    document.getElementById('player-exposure').setAttribute('visible', 'false')
    document.getElementById('restart-button').setAttribute('clickable', 'true')
    document.getElementById('restart-button').addEventListener('click', (evt) => {
        restart()
    })
    // todo disable movement
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

const hideScreens = () => {
    document.getElementById('fail-screen').setAttribute('visible', 'false')
    document.getElementById('win-screen').setAttribute('visible', 'false')
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

const randomEnemiesForArea = (area, areaData) => {
    this.activeCheckpoint = area

    const enemiesAreas = document.getElementById('enemies')

    while (enemiesAreas.firstChild) {
        enemiesAreas.firstChild.remove()
    }

    const newArea = document.createElement('a-entity')
    newArea.setAttribute('position', areaData.position)
    enemiesAreas.appendChild(newArea)
    
    const enemies = generateEnemiesList(areaData)
    const test = document.getElementsByClassName('enemyTemplate')[0]
    const colors = ['red', 'blue', 'yellow', 'pink', 'purple', 'green']

    enemies.forEach((enemy) => {
        const e = test.cloneNode(true)
        e.setAttribute('position', { x: enemy.x, y: -.2, z: enemy.z })
        e.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
        e.addEventListener('hitstart', hitPlayer)

        newArea.appendChild(e)
    })
}

const generateEnemiesList = (areaData) => {
    var enemies = [],
        enemy = {},
        overlapping = false,
        maxEnemies = areaData.amount,
        protection = 10000,
        counter = 0

    while (enemies.length < maxEnemies && counter < protection) {
        enemy = {
            x: Math.floor(Math.random() * areaData.width),
            z: Math.floor(Math.random() * areaData.height),
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