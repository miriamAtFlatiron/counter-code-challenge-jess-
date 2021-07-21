let counter = document.getElementById("counter")
    counter = parseInt(counter.innerText)

function addOne(x){
    x + 1
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        console.log(counter)
        // addOne(counter) 
    } ,1000)
})
