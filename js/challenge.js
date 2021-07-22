
let counterDisplay = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let ul = document.querySelector("ul")
// let ul = document.getElementsByTagName("UL")
//     ul = ul[0]
    


let counter = parseInt(counterDisplay.innerText)
let timer = setInterval(addOne, 1000)

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

function likeNumber(){ 
    let li = document.createElement("li")
    li.innerHTML = `${counter} was liked x times`
    ul.appendChild(li)

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

