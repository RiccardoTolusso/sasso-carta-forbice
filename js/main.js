const noMove = "scegli"

let moveUser1 = noMove
let moveUser2 = noMove

let gameEnded = false

const displayUser1 = document.getElementById("input-1")
const displayUser2 = document.getElementById("input-2")

const resultUser1 = document.getElementById("result-1")
const resultUser2 = document.getElementById("result-2")



displayUser1.innerHTML = moveUser1
displayUser2.innerHTML = moveUser2

function winner(userMove, opponentMove){
    console.log(userMove, opponentMove)
    if (userMove === opponentMove){
        return null;
    }
    if (userMove === "sasso"){
        if (opponentMove === "carta"){
            return false;
        }
        if (opponentMove === "forbice"){
            return true;
        }
    }
    if (userMove === "carta"){
        if (opponentMove === "forbice"){
            return false;
        }
        if (opponentMove === "sasso"){
            return true;
        }
    }    
    if (userMove === "forbice"){
        if (opponentMove === "sasso"){
            return false;
        }
        if (opponentMove === "carta"){
            return true;
        }
    }    
}

function showResult(user, result){
    console.log(user, result)
    let resultToModify
    if (user === 1){
        resultToModify = resultUser1;
    }
    if (user === 2){
        resultToModify = resultUser2;
    }

    if (result === true){
        resultToModify.innerHTML = "HAI VINTO";
    }
    if (result === false){
        resultToModify.innerHTML = "HAI PERSO";
    }
    if (result === null){
        resultToModify.innerHTML = "AVETE PAREGGIATO";
    }
    
}

function resetGame(){
    moveUser1 = noMove
    moveUser2 = noMove
    displayUser1.innerHTML = moveUser1
    displayUser2.innerHTML = moveUser2

    resultUser1.innerHTML = null
    resultUser2.innerHTML = null

    return
}

function chooseMove(user, move){
    if (gameEnded){
        resetGame()
        gameEnded = false;       
    }
    if(user === 1){
        moveUser1 = move;
        displayUser1.innerHTML = moveUser1;
    }
    if(user === 2){
        moveUser2 = move;
        displayUser2.innerHTML = moveUser2;
    }

    if (moveUser1 !== noMove && moveUser2 !== noMove){
        showResult(1, winner(moveUser1, moveUser2))
        showResult(2, winner(moveUser2, moveUser1))
        gameEnded = true
    }
}

