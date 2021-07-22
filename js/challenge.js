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

const count = parseInt(counterDisplay.innerText)

function likeNumber(){ 
   console.log(likeButton)
    console.log(count)
    let li = document.createElement("li")
    li.innerHTML = `${count} was liked ${likes} times`
    ul.appendChild(li)
    
    if (count != counter){
        likes = 1
    }
    else{ 
         likes = likes + 1
    }
   
}

function pauseNumber(){

    
}

// identify the elemnt for the button
// press the like button
// create an li in the Ul
// grab the current timer value
// print the number you liked and how many times yuo liked it in an li

document.addEventListener("DOMContentLoaded", function(){
    timer
})

minusButton.addEventListener("click", minusOne)
plusButton.addEventListener("click", plusOne)
likeButton.addEventListener("click", likeNumber)
// pauseButton.addEventListener("click", pauseNumber)
