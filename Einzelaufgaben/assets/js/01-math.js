/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log('Hallo', 10, six);

var x = 10;
var x = "10";
var x = '10';

// add six to three
console.log(six+three);

// subtract six from three
console.log(six-three);

// multiply three times six
console.log(three*six)
// divide three by six
console.log(three/six)

// modulo six by three
console.log(three%six)
// log results

// build a function, that:
function giveMessage(){
    var name="Emre"; //bu fonksiyon dışarısından okunmaz. Çünkü fonksiyon içerisinde ilk tanımlandı.
    console.log(name);
    name2="ismail"; //bu değişiklik function dışarısından da izlenebilir çünkü ilk olarak function dışarısında tanımlandı.
}
giveMessage();

// takes two parameters
const helloFunction5 = (num1,num2)=>{
    return num1+num2;
}
console.log(helloFunction5(1,2));
// checks if both parameters are numbers, else returns error message in the console
const helloFunction6 = (num1,num2)=>{
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        return console.log(num1+num2);
    }
    else{
        return console.log("Please enter numbers")
    }
}
helloFunction6("asdasd",2)
helloFunction6(5,2)

// divides the first one by the second one

const helloFunction4 = (num1,num2)=>{
    return console.log(num1/num2);
}
helloFunction4(6,2);

// adds three to the result of the division
const helloFunction3 = (num1,num2)=>{
    return console.log(num1/num2 +3);
}
helloFunction3(9,2);

// multiplies the result by the second parameter
const helloFunction2 = (num1,num2)=>{
    return console.log((num1/num2)*num2);
}
helloFunction2(9,2);


// when the result is equal to 21, subtract 4
const helloFunction1 = (num1,num2)=>{
    if(num1+num2 ==21){
        return console.log((num1+num2-4));
    }
    // else add 4
    else{
        // and then returns the result
        // log the result of the function
        return console.log((num1+num2+4));
    }
}
helloFunction1(12,9);

//Final :
const helloFunction10 = (num1,num2)=>{
    if(!isNaN(num1) && !isNaN(num2)){
        var result = (num1/num2+3)*num2;
        if(result==21){
            return console.log((result-4));
        }
        // else add 4
        else{
            // and then returns the result
            // log the result of the function
            return console.log((result+4));
        }

    }else{
        return console.log("Please enter numbers")
    }
}

helloFunction10(10,5);
helloFunction10("sadasdasdsad",5);
