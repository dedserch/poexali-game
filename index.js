const phrases = new Map() 
phrases.set(10,"Хорошо работаете")
phrases.set(20,"Шесть заработали")
phrases.set(30,"Максимальное ускорение")
phrases.set(40,"Вы же математики!!!")
phrases.set(50,"ГДЕЕЕЕ СЕРЖПУТОВСКИЙ")
const cactus = document.querySelector('.cactus')
const poexali = document.querySelector('.poexali')
const score = document.querySelector('.score')
let counter = 0
const phrasesText = document.querySelector("p")


document.addEventListener("click", function(event){
    jump()
})

document.addEventListener("keydown", function(event){
    jump()
})

function jump() {
    
    if(poexali != "jump"){
        poexali.classList.add("jump")
        score.innerHTML = ++counter
        if(counter%10 === 0){
            phrasesText.textContent = phrases.get(parseInt(counter))
        }
        
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


