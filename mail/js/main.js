// Declare and assign an array with emails
const emailList = ["boolean@gmail.com","javascript@gmail.com","ciao@gmail.com", "luca@gmail.com", "maki@hotmail.it"];

// Assign button and message from DOM
const myButton = document.getElementById("myButton");
let inputMail;
let message = document.getElementById("message");



// Click function to access with email
myButton.addEventListener("click",
        function(){

        // Assign input value from DOM
        inputMail = document.getElementById("inputMail").value;

        // Declare a var if entered email is inside an array
        let inList = false;
        
        // Then cycle with a condition
        for(let i = 0; i < emailList.length; i++){
        
            // If entered mail is alrdy inside array, print positive message overwriting older
            if(inputMail == emailList[i]){ 
                inList = true; 
            }
        }

        // Message condition if true or false
        if(inList == true){
            inList = "You are welcome =)";
        }else{
            inList = "You are not allowed to access, try with another email."
        }

        // Inner html of result to message in DOM
        message.innerHTML = inList;
        }
    )    