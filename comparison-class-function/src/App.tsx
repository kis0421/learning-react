import React from "react";
import styled from "styled-components";

const App = styled.div`
  width: 500px;
  margin: 0 auto;
  outline: 1px solid #dedede;
  > header {
    background-color: #F9EBC8;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #777
  }
  > nav {
    background-color: #A0BCC2;
    height: 30px;
    line-height: 30pxx;
    color: #777;
    > button {
      width: 30px;
      height: 30px;
      float: right;
    }
    > input[type='text'] {
      width: calc(100% - 40px);
      background: none;
      border: none;
      height: 26px;
      &:focus {
        outline:none;;
      }
    }
  }
`;

export default () => {
  return <App>
    <header>
      할 일
    </header>
    <nav>
      <input type="text" />
      <button> + </button>
    </nav>
    <main style={{ backgroundColor: "#FEFBE7", height: "500px" }}>
      <section>
        <article>
        </article>
      </section>
    </main>
  </App >
}
// display: "flex", justifyContent: "center",