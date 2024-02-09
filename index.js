const cactus = document.querySelector('.cactus')
const poexali = document.querySelector('.poexali')
const score = document.querySelector('.score')
let counter = 0


document.addEventListener("click", function(event){
    jump()
})

document.addEventListener("keydown", function(event){
    jump()
})

function jump() {
    
    if(poexali != "jump"){
        poexali.classList.add("jump")
        score.innerHTML = counter++
    }
    setTimeout(function(){
        poexali.classList.remove("jump")   
    }, 300)
}

let isAlive = setInterval(function(){
    let poexaliTop = parseInt(window.getComputedStyle(poexali).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft < 53 && cactusLeft > 0 && poexaliTop >= 140){
        confirm("Плохо работаешь")
        location.reload()
    } 
}, 10)

