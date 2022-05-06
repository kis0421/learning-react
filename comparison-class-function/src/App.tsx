import React from "react";
import styled from "styled-components";

import Header from "./component/Header";
import SheduleColumn from "./component/SheduleColumn";

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
  > main {
      background-color: #FEFBE7;
      height: 500px;
      > section {
          height:inherit;
          overflow-y: auto;
        > article {
          border-bottom: 1px solid #dedede;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
`;

export default () => {
  return <App>
    <Header />
    <main>
      <section>
        {new Array(1).fill("").map((_) => <SheduleColumn title="끝내주게 일어나기" />)}
      </section>
    </main>
  </App >
}
