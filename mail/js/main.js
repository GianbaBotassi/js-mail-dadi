// Declare and assign an array with emails
const emailList = ["cighi","luighi","scemo"];

// Select input and button from DOM
const inputMail = document.getElementById("inputMail").value;
const myButton = document.getElementById("myButton");


// Click function to send email
myButton.addEventListener("click",
    function(){

    // Cycle all elements inside array
    for(let i = 0; i < emailList.length; i++){

        // Declare a const

        // Condition, if entered mail is alrdy inside array, print positive message
        if(inputMail == emailList[i]){  
            alert("You are welcome " + inputMail + "!");
        }else if(!(inputMail == emailList[i])){
            alert("icoa")
        }
    }


    })


// Se input è uguale a elemento ciclato della lista

// output positivo o negativo

