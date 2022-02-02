// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Paulita Starkey" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let totalCookies = 0 // total Gingerbread ordered
let countCookies = 0
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb & minus-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with an id of add- & minus-gb
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the element with an id of add-gb & minus-gb
const ssPlusBtn = document.querySelector('#add-sugar')
const ssMinusBtn = document.querySelector('#minus-sugar')
// selecting the element with the id of qty-total
const total = document.querySelector('#qty-total') 

// Code to update name display
credit.textContent = `Created by ${yourName}`

//function to update the Gingerbread + counter
function updateGbQty(displayGbQty) {
    let totalGb = document.querySelector('#qty-gb')
    totalGb.innerHTML = displayGbQty
}

//function to update the Chocolate Chip + counter
function updateCcQty(displayCcQty) {
    let totalCc = document.querySelector('#qty-cc')
    totalCc.innerHTML = displayCcQty
}

//function to update the Sugar Sprinkle + counter
function updateSsQty(displaySsQty) {
    let totalSs = document.querySelector('#qty-sugar')
    totalSs.innerHTML = displaySsQty
}

//function to calculate the total cookies ordered
function totCookies(displayTotal) {
    countCookies = (gb + cc +ss)
    let allCookies = document.querySelector('#qty-total')
    allCookies.innerHTML = displayTotal
}

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    updateGbQty(`${++gb}`)
    countCookies =+ gb
    totCookies(countCookies)
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function(e) {
    console.log('Gingerbread + button was clicked!')
    updateCcQty(`${++cc}`)
    countCookies =+ cc
    totCookies(countCookies)
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
ssPlusBtn.addEventListener('click', function(e) {
    console.log('Gingerbread + button was clicked!')
    updateSsQty(`${++sugar}`)
    countCookies =+ sugar
    totCookies(countCookies)
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(e) {
    console.log('Gingerbread - button was clicked!')
    if(gb > 0) {
        gb--
     } else {
        console.log('No Gingerbread cookies')
     }
    updateGbQty(`${gb}`)
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function(e) {
    console.log('Chocolate - button was clicked!')
    if(cc > 0) {
        cc--
     } else {
        console.log('No Chocolate cookies')
     }
    updateCcQty(`${cc}`)
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
ssMinusBtn.addEventListener('click', function(e) {
    console.log('Sugar Sprinkle - button was clicked!')
    if(sugar > 0) {
        sugar--
     } else {
        console.log('No Sugar Sprinkle cookies')
     }
    updateSsQty(`${sugar}`)
})
