import { Fragment } from 'react'
import Square from './Square'

const Board = ({ board, ended, currentPlayer, winner, onPlay }) => {
  const renderSquare = i => {
    return <Square value={board[i]} disabled={winner} onPlay={() => onPlay(i)} />
  }

  return (
    <Fragment>
      <div className="status">
        {
          ended ? `Game ended` : 
            winner ? `Winner is ${winner}` 
            : `Current player: ${currentPlayer}`
        }
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </Fragment>
  )
}

export default Board