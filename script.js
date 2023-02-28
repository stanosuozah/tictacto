const gameStatus = document.querySelector(".game_status")
let gameActive = true
let player = "X"
let gameState = ["", "", "", "", "", "","", "",""]
//Arrow function 
const winningMessage = () => `player ${player} has won`
//Arrow function ES6 syntax of declaring a function 
const drawMessage = () => "Game ended in draw"
const currentPlayerTurn = ()=> `It is player ${player}'s turn`
gameStatus.innerHTML = currentPlayerTurn()

const handleCellPlayed = (clickCell, cellIndex) => {
    gameState[cellIndex] = player
    clickCell.innerHTML = player
}
const winningCondition = [[0, 1, 2], [3,4,5],[6,7,8],[0,3,6],[1,4,7], [2,5,8],[0,4,8],[2,4,6]]

const handlePlayerChange = () =>{
    //Tenary if statement
    player = player === "X"? "O": "X" 
    gameStatus.innerHTML = currentPlayerTurn()
}
const handleResultValidation = () =>{
    let roundWon = false
    for(let i = 0; i<=7; i++){
        const winCondition = winningCondition[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        
        if (a===""|| b==="" || c===""){
            continue
        }
        if(a===b && b==c){
            roundWon = true
            break
        }
        
        if (roundWon){
            gameStatus.innerHTML = winningMessage()
            gameActive = false
            return
        }

        let roundDraw = !gameState.includes("")
        if (roundDraw){
            gameStatus.innerHTML =drawMessage()
            gameActive = false
            return
        }

    }
    handlePlayerChange()
}
const handleCellClick = (event) =>{
    const clickedCell = event.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index")) 
    if (gameState[clickedCellIndex]!== "" || !gameActive){
        return
    }
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
}
const handleReset = () =>{
    gameActive = true
    player = "X"
    gameState = ["", "", "", "", "", "","", "",""]
    gameStatus.innerHTML = currentPlayerTurn()
    document.querySelectorAll(".cell").forEach((cell)=>(cell.innerHTML=""))
}
document.querySelectorAll(".cell").forEach((cell)=> cell.addEventListener("click", handleCellClick))
document.querySelector(".reset_btn").addEventListener("click", handleReset)



//Create an array for winning condition --Array of arrays







