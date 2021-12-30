// get all keys
const keys = document.querySelectorAll(".key")

console.log(keys)
// play notes
function playNote(event){
    console.log(event)
    // get key code

    // typed or pressed key

    // if key exists

    // play audio
}
// click with mouse
keys.forEach(function(key){
    key.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)