// log the value of the input on every input

document.addEventListener('DOMContentLoaded', () =>
{
    const input = document.querySelector('input');

    input.addEventListener('keypress', e =>
    {
        console.log(e.target.value);
    });
});

// prevent default on button #submit click
document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
});

// and change text of #output to „Der Button wurde geklickt!“
document.getElementById("submit").addEventListener("click", write);
function write(){
    document.getElementById("output").innerText = "Der Button wurde geklickt!";
}


// log the message „500px erreicht“, when the user scrolls more than 500px
var cont = true;
window.addEventListener('scroll', function(){
    if(window.pageYOffset >=500 && cont){
        console.log("500px erreicht");
        cont = false;
    }
});
