let counterDisplay = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let ul = document.querySelector("ul")
let pauseButton = document.getElementById("pause")


let counter = parseInt(counterDisplay.innerText)
let timer = setInterval(addOne, 1000)
let likes = 0

function addOne(){
    counter = counter + 1
    counterDisplay.innerText = counter
}

function minusOne(){
    counter = counter - 1
    counterDisplay.innerHTML = counter 
}

function plusOne(){
    counter = counter + 1
    counterDisplay.innerHTML = counter
}

// const count = parseInt(counterDisplay.innerText)

function likeNumber(){ 

    const counterNumber = (counterDisplay.innerText)
    let li = document.createElement("li")
    li.innerHTML = `${counter} was liked ${likes} times`
    ul.appendChild(li)

    if (likes == 0){
        likes += 1
        console.log(likes)
        const counterNumber = (counterDisplay.innerText)
        let li = document.createElement("li")
        li.innerHTML = `${counterNumber} was liked ${likes} times`
    }
    else {
        likes += 1
        ul.lastChild.innerText = `${counter} was liked ${likes} times`
    }

}

// function pauseNumber(){

// }

document.addEventListener("DOMContentLoaded", function(){
    timer
})

minusButton.addEventListener("click", minusOne)
plusButton.addEventListener("click", plusOne)
likeButton.addEventListener("click", likeNumber)
// pauseButton.addEventListener("click", pauseNumber)
