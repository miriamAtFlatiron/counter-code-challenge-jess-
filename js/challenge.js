let counterDisplay = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
// let ul = document.querySelector("ul")
let likesElement = document.querySelector(".likes")
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
    console.log("here")
    const counterNumber = counterDisplay.innerText
    let li = document.createElement("li")
    
    if (likes == 0){
        likes +=1
        console.log("likes", likes)
        console.log("counterNumber", counterNumber)
        li.innerText = `${counterNumber} was liked ${likes} times`
        likesElement.appendChild(li)
    }
    else {
        likes += 1
        console.log("likes", likes)
        console.log("counterNumber", counterNumber)
        // likesElement.lastChild.innerText = `${counter} was liked ${likes} times`
        li.innerText = `${counterNumber} was liked ${likes} times`
        likesElement.appendChild(li)
    }

}

// pauseButton.addEventListener("click", function pauseNumber(){

// }

document.addEventListener("DOMContentLoaded", function(){
    timer
})

minusButton.addEventListener("click", minusOne)
plusButton.addEventListener("click", plusOne)
likeButton.addEventListener("click", likeNumber)
// pauseButton.addEventListener("click", pauseNumber)
