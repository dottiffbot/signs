
// let fruits = [
//     {name: "apple", color: "red"},
//     {name: "orange", color: "orange"},
//     {name: "banana", color: "yellow"},
//     {name: "lime", color: "green"},
//     {name: "blueberry", color: "blue"},
// ]

// function showFruits () {
//     fruits.forEach(fruit => {
//     console.log(fruit.name)
//     const produce = document.createElement("p")
//     produce.innerHTML = fruit.name // select the paragraph and change the innerHTML to the fruit name with the object key, name:

//     produce.style.backgroundColor = fruit.color // change the background color to the color of the fruit for each object in the array
//     document.querySelector(".store").appendChild(produce)
// })
// }

// showFruits()


// let fruits = [
//     "apple", "orange", "banana", "lime", "blueberry"
// ]

// function showFruits () {
//     fruits.forEach(fruit => {
//     const produce = document.createElement("p") // create a paragraph element stored in the variable produce
//     produce.innerHTML = fruit // select the paragraph and change the inner html to the fruit name in the array for each string
//     document.querySelector(".store").appendChild(produce) // add each paragraph into the div with a class of store

// })
// }

// showFruits()



let button = document.querySelector("#button")



button.addEventListener('click', function(){

    button.classList.add("clicked")
 
    console.log('clicked')
})

