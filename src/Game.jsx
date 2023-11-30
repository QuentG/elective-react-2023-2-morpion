import { useState, useMemo } from "react"
import "./App.css"
import Board from "./components/Board"
import { calculateWinner } from "./services/gameService"

const DEFAULT_BOARD = Array(9).fill('')

const Game = () => {
  const [history, setHistory] = useState([DEFAULT_BOARD])
  const [turnNumber, setTurnNumber] = useState(0)

  const currentPlayer = useMemo(() => {
    return turnNumber % 2 === 0 ? "X" : "O"
  }, [turnNumber])

  const winner = useMemo(() => {
    return calculateWinner(history[turnNumber])
  }, [history, turnNumber])
  
  const play = i => {
    // Si la case est déjà jouée ou si un gagnant est déjà déclaré, on ne fait rien.
    if (history[turnNumber][i] || winner) {
      return
    }

    // On crée une copie du tableau de l'historique.
    const newHistory = [...history]
    // On crée une copie du tableau de l'état actuel.
    const newBoard = [...newHistory[turnNumber]]
    // On modifie la case jouée par le joueur actuel.
    newBoard[i] = currentPlayer

    // On ajoute le nouveau tableau à l'historique.
    setHistory([
      ...newHistory.slice(0, turnNumber + 1),
      newBoard,
    ])

    // On incrémente le numéro de tour
    setTurnNumber(turnNumber + 1)
  }

  const reset = () => {
    setTurnNumber(0)
    setHistory([DEFAULT_BOARD])
  }

  const jumpTo = move => setTurnNumber(move)

  return (
    <div className="game">
      <div className="game-board">
        <Board
          board={history[turnNumber]}
          ended={history.length >= 10}
          currentPlayer={currentPlayer}
          winner={winner}
          onPlay={play}
        />
      </div>
      <div className="game-info">
        <button onClick={reset}>Reset</button>
        <ol>
          {
            history.map((_, index) => (
              <button key={index} onClick={() => jumpTo(index)}>{index + 1}</button>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default Game