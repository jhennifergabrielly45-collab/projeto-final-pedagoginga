
// Seleciona todas as células no tabuleiro (9 divs com classe "cell")
const cells= document.querySelectorAll(".cell")
// Seleciona a área de status ( quem joga,vitória ou empate)
const statustext = document.getElementById("status");
// Seleciona o botão de reiniciar
const restartBtn = document.getElementById("restart");
//Define quem é o jogador
let currentPlayer = "x";

// Array que representa o tabuleiro (9 posições)
let board = ["","","","","","","","","",""]

// Variável para controlar se o jogo ainda está em andamento
let gameActive = true;

const winningConditions = [
    [0,1,2],//linha superior
    [3,4,5],//linha do meio
    [6,7,8],//linha inferior
    [0,6,3],//coluna esquerda
    [1,4,7],//coluna do meio
    [2,5,8],//coluna direita
    [0,4,8],//diagonal principal
    [2,4,6],//diagonal secundária
];

function initializeGame() {
   for ( let i =0; i <9; i++){
      cells[i].addEventListener("click", handleCellClick)
   }
   restartBtn.addEventListener("click",restartGame)
   statustext.textContent = `vez do jogador ${currentPlayer}`;
}

function handleCellClick(event) {
    const cell = event.target //célula clicada
    const index = cell. getAttribute ("data-index"); //índece de célula (0 a 8)

    // Se já tiver valor ou jogo acabou,ignora clique
    if (board [index] !== ""|| !gameActive) {
        return
    };

    board[index] = currentPlayer;
    cell.textContent = currentPlayer

    if(currentPlayer === "x"){
        cell.classList.add("x")
    } else{
        cell.classList.add("o")
    }
        
    checkwinner();
}
