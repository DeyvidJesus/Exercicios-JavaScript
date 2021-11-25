// When the user clicks the purchase button, render out "Something went wrong try again" 
// in the paragraph that has the id="error"

var paragraph = document.getElementById('error')

function render(){
    paragraph.innerText = "Something went wrong, try again."
}