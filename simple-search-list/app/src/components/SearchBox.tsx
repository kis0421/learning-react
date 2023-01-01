import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  width: 350px;
  height: 35px;
  border-radius: 4px;
  > input {
    width: 100%;
    border: none;
    font-size: 14px;
    &:focus{
      outline: none;
    }
  }
  > button {
    width: 50px;
    font-size: 14px;
    margin-right: 4px;
    border: none;
    background: none;
  }
`

const SearchBoxConatainer = () => {
  return (
    <SearchBox>
      <input type='text' />
      <button>검색</button>
    </SearchBox>
  )
}

export default SearchBoxConatainer