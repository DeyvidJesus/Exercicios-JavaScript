// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count

var count = 0
var countEl = document.getElementById('count-el')
var saveValue = document.getElementById('save-value')

function increment(){
    count++
    countEl.innerText = count
}

function save(){
    var people = count
    saveValue.innerText += " " + people + " -"
}

function zero(){
    count = 0
    countEl.innerText = 0
    saveValue.innerText = "Previous entries:"
}