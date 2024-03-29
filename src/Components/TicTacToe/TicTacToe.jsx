import "./TicTacToe.css";

export default function TicTacToe() {
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  );
}
