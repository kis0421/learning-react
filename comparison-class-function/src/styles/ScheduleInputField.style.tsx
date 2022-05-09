import styled from "styled-components";

export default styled.nav` 
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
`;

