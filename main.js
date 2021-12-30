// get all keys
const keys = document.querySelectorAll(".key")

console.log(keys)
// play notes
function playNote(event){

    console.log(event.keyCode)
    // get key code
    let audioKeyCode = getKeyCode(event)
    // typed or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    console.log(key)
    // if key exists
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey){
        return
    }
    // play audio
    playAudio(audioKeyCode)
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function getKeyCode(event){
    let keyCode;
    
    const isKeyboard = event.type === "keydown"
    if(isKeyboard)
    {
        keyCode = event.keyCode
    }
    else
    {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

// click with mouse
keys.forEach(function(key){
    key.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)