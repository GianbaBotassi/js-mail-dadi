// Declare and assign an array with emails
const emailList = ["boolean@gmail.com","javascript@gmail.com","ciao@gmail.com"];

// Assign button and message from DOM
const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

// Click function to access with email
myButton.addEventListener("click",
    function(){

        // Assign input value from DOM
        const inputMail = document.getElementById("inputMail").value;

        // Put before a negative outcome message
        message.innerHTML = "You are not allowed to access, try with another email.";
        
        // Then cycle with a condition
        for(let i = 0; i < emailList.length; i++){
        
            // If entered mail is alrdy inside array, print positive message overwriting older
            if(inputMail == emailList[i]){  
                message.innerHTML = "You are welcome =)";
            }else if(inputMail == 0){   //if inputMail is empty, another message
                message.innerHTML = "Remember to enter an email!!!";
            }
        }
    })

