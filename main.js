let rig
let scenes

window.onload = () => {
    rig = document.getElementById('rig')

    scenes = {
        room: document.getElementById('room-scene'),
        festival: document.getElementById('festival-scene')
    }

    // toIntroScene()
    toFestivalScene()
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
