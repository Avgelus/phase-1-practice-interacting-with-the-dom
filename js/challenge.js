const counter = document.getElementById("counter")
const downIncrement = document.getElementById("minus")
const upIncrement = document.getElementById("plus")
const heartButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")

downIncrement.addEventListener("click", (e) => {
    console.log(e.target)
    counter.innerText--
})

upIncrement.addEventListener("click", (e) => {
    console.log(e.target)
    counter.innerText++
})





