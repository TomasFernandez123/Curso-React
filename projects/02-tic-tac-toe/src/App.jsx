import { useState } from 'react'
import confetti  from 'canvas-confetti'
import './App.css'

import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { Turn } from './components/Turn'

// TABLERO PRINCIPAL
function App() {
  // ESTADO DEL JUEGO
  const [board, setBoard] = useState(() => {
    const boardFromStorage  = localStorage.getItem('board')
    return boardFromStorage  ? JSON.parse(boardFromStorage ) : Array(9).fill(null)
  })

  // ESTADO DEL TURNO
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })

  // ESTADO DEL GANADOR, Null si no hay ganador, false si hay empate, o el símbolo del ganador si hay un ganador
  const [winner, setWinner] = useState(null)

  // FUNCION PARA ACTUALIZAR EL TABLERO Y CAMBIAR EL TURNO
  // Recibe el index del cuadrado que se ha clicado
  const updateBoard = (index) => {
    const newBoard = [...board]

    if(newBoard[index] || winner) return // Si ya hay una marca en ese cuadrado, no hacer nada o hay un ganador

    // Actualizar el tablero con el turno actual
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar el tablero y el turno en localStorage
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', JSON.stringify(newTurn))

    // Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti() // Celebrar con confetti si hay un ganador
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Si no hay ganador y el tablero está lleno, es un empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Board board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame}/>

      <button onClick={resetGame} className='reset'>
        Reset
      </button>
    </main>
  )
}

export default App
