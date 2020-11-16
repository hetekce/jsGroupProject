// log text content from #headline

var headline = document.getElementById("headline");


// change the text from the headline to:
headline.innerHTML = "Cool, sie ist offen! :)";

// „Cool, sie ist offen! :) “

// set value of the input element #input to:
var input = document.getElementById("input");
// „Hier steht Text“
input.placeholder ="Hier steht Text";

// set the value of the input element #input
var output = document.getElementById("output")

// as the innerHtml of the div #output
input.value = output.innerHTML;

// add the class bg-black to the body
var body = document.body;

// if there it doesn't got it already
if(body.className ==""){
    body.classList.add("bg-black");
}
else{
    body.classList.add("bg-white");
}


// toggle the class bg-black on the input
function myFunction() {
    input.classList.toggle("border-red");
}


// multiply the data-number attribute by 3
var  m = output.getAttribute("data-number")

// and update the value in the dom
output.setAttribute("data-number", m*3)
