// Create button for function
const myButton = document.getElementById("myButton");

// Create click function
myButton.addEventListener("click",
    function(){
        // Math random for User
        const numUser = Math.floor((Math.random() * 6) + 1);

        // Add to DOM math random user
        document.getElementById("numUser").innerHTML = numUser;

        // Math random for bot
        const numBot = Math.floor((Math.random() * 6) + 1);

        // Add to DOM math random Bot
        document.getElementById("numBot").innerHTML = numBot;

        // Assing constant result
        const result = document.getElementById("result");

        // Condition to know who win
        if(numUser > numBot){
            whoWin = "You"
            // User win
        }else if(numUser < numBot){
            whoWin = "Bot";
            // Bot win
        }else{
            whoWin = "Draw"
            // Draw
        }
        
        result.innerHTML = whoWin;
    }
    )


