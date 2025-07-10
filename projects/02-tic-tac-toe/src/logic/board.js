import { combinations } from "../constants"

export const checkWinner = (board) => {
    // Revisar si hay un ganador
    for (const combination of combinations) {
        const [a, b, c] = combination
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a] // Retorna el símbolo del ganador
        }
    }

    return null // No hay ganador ni empate
}

export const checkEndGame = (board) => {
    // Revisar si el tablero está lleno
    return board.every(square => square !== null)
}