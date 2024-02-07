const cactus = document.querySelector('.cactus')
const poexali = document.querySelector('.poexali')

document.addEventListener("keydown", function(event){
    jump()
})

function jump() {
    if(poexali != "jump"){
        poexali.classList.add("jump")
    }
    setTimeout(function(){
        poexali.classList.remove("jump")
        
    }, 300)
}

let isAlive = setInterval(function(){
    let poexaliTop = parseInt(window.getComputedStyle(poexali).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft < 50 && cactusLeft > 0 && poexaliTop >= 140){
        alert("Плохо работаешь")
    }
}, 10)