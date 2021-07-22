let counterDisplay = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let ul = document.querySelector("ul")
// let likesElement = document.querySelector(".likes") => works the same as ul
let pauseButton = document.getElementById("pause")


let counter = parseInt(counterDisplay.innerText)
let timer = setInterval(addOne, 1000)
let likes = 0

function addOne(){
    counter = counter + 1
    counterDisplay.innerText = counter
    likes = 0
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
  console.log(likeButton)
    // const counterNumber = counterDisplay.innerText 
   
    //1.not adding because not integer? data type issue? Solution: 
  //instead of creating new counter here, use one from line 10, already does parseInt 

  //2/result:  likes does not increment with each counter, but it doesn't yet count several likes per number 
    if (likes == 0){
        likes +=1
        console.log("likes", likes)
        console.log("counter", counter)
        let li = document.createElement("li")
        li.innerText = `${counter} was liked ${likes} times`
        // likesElement.appendChild(li)
        ul.appendChild(li)
    } else {  //fixed this syntax, moved else up a line, and that fixed 
        likes +=1
        console.log("else likes", likes)
        console.log("elsecounterNumber", counter)
        // likesElement.lastChild.innerText = `${counter} was liked ${likes} times`
        // li.innerText = `${counter} was liked ${likes} times`
        ul.lastChild.innerText = `${counter} was liked ${likes} times`
        //3.Problem: it catches the likes number, but doesn't hold on to all the li's, 
        // 3=> this was the code, it was just replacing the li, instead of adding to it with the new number of likes: likesElement.appendChild(li) ==> change this, instead of appendChild, use .lastChild 
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
