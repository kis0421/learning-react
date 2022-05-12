import styled from "styled-components";

export default styled.div`
  width: 500px;
  margin: 0 auto;
  outline: 1px solid #dedede;
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