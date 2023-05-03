// creo bottone per dare un numero random da 1 a 6

// funzione con click da un numero da 1 a 6 all'user
    const numUser = Math.floor((Math.random() * 6) + 1);

    document.getElementById("numUser").innerHTML = numUser;
// da un numero da 1 a 6 al computer
const numBot = Math.floor((Math.random() * 6) + 1);

document.getElementById("numBot").innerHTML = numBot;



// Dichiaro costante chi ha vinto


// condizione per vedere chi ha vinto
if(numUser > numBot){
    result = "you"
    // Vince User
}else if(numUser < numBot){
    result = "your worst enemy";
    // Vince Bot
}else{
    result = "draw"
    // Pareggio
}

document.getElementById("result").innerHTML = "and the winner is " + result;
;