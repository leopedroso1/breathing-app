const container = document.querySelector('.container') // Add the class here
const text = document.querySelector('#text') // id format

// All measures in milliseconds
const totalTime = 7500  
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation(){

    text.innerHTML = 'Breath In!' // Changes the inner HTML 
    container.className = 'container grow' // changes the className...or the STYLE!

    setTimeout(() => {

        text.innerText = 'Hold'

        setTimeout(() => {

            text.innerText = 'Breath Out!'
            container.className= 'container shrink'

        }, holdTime)
    }, breatheTime)

}

setInterval(breatheAnimation, totalTime)