import React, { useCallback } from "react";
import { useSetState } from "react-use";
import pikachu from "../image/pikachu.png";

export default () => {

  const [state, setState] = useSetState({
    row: 10,
    column: 10,
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ [e.target.name]: parseInt(e.target.value, 10) })
  }, []);

  const buttons = [
    { title: "가로 + 1", position: "row", fn: () => setState({ row: state.row + 1 }) },
    { title: "가로 - 1", position: "row", fn: () => setState({ row: state.row - 1 }) },
    { title: "세로 + 1", position: "column", fn: () => setState({ column: state.column + 1 }) },
    { title: "세로 - 1", position: "column", fn: () => setState({ column: state.column - 1 }) },
    { title: "가로 * 2", position: "column", fn: () => setState({ row: state.row * 2 }) },
    { title: "세로 * 2", position: "column", fn: () => setState({ column: state.column * 2 }) },
  ]
  return <>
    <div>
      <header>
        <section>
          <div>
            <span>가로</span>
            <input type="number" name="row" id="inputRow" value={state.row} onChange={handleChange} />
          </div>
          <div>
            <span>세로</span>
            <input type="number" name="column" id="inputColumn" value={state.column} onChange={handleChange} />
          </div>
        </section>
        <br />
        <div>
          {buttons.map((button) => <button
            key={button.title}
            onClick={button.fn}>{button.title}</button>)}
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