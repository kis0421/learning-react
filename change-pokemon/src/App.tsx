import React from "react";
import { useSetState } from "react-use";
import pikachu from "../image/pikachu.png";

export default () => {

  const [state, setState] = useSetState({
    row: 10,
    column: 10,
  })

  return <>
    <div>
      <header>
        <section>
          <div>
            <span>가로</span>
            <input type="number" name="row" id="inputRow" value={state.row} onChange={(e) => setState({ [e.target.name]: parseInt(e.target.value, 10) })} />
          </div>
          <div>
            <span>세로</span>
            <input type="number" name="column" id="inputColumn" value={state.column} onChange={(e) => setState({ [e.target.name]: parseInt(e.target.value, 10) })} />
          </div>
        </section>
        <br />
        <div>
          <button onClick={() => setState({ row: state.row + 1 })}>가로 + 1</button>
          <button onClick={() => setState({ row: state.row - 1 })}>가로 - 1</button>

          <button onClick={() => setState({ column: state.column + 1 })}>세로 + 1</button>
          <button onClick={() => setState({ column: state.column - 1 })}>세로 - 1</button>

          <button onClick={() => setState({ row: state.row * 2 })}>가로 * 2</button>
          <button onClick={() => setState({ column: state.column * 2 })}>세로 * 2</button>
        </div>
        <br />
      </header >
      <br />
      <section id="pokemonWrap">
        {new Array(state.row)
          .fill(false)
          .map((_, rowIndex) => <div key={rowIndex}>
            {new Array(state.column)
              .fill(false)
              .map((_, columnIndex) => <img src={pikachu} key={`${rowIndex}${columnIndex}`} />)}
          </div>)}
      </section>
    </div >
  </>
}