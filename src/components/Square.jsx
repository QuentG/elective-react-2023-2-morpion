const Square = ({ value, onPlay, disabled }) => (
  <button className="square" disabled={disabled} onClick={onPlay}>{value}</button>
)

export default Square