import { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SearchBox = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  width: 30%;
  height: 35px;
  border-radius: 4px;
  margin-top: 12px;
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
`;

const SearchBoxConatainer = () => {
  console.log(process.env);
  const inputRef = useRef<HTMLInputElement>(null);
  const search = () => {
    if (inputRef.current?.value) {
      axios.get(`http://dapi.kakao.com/v2/search/image?query=${inputRef.current.value}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`
        }
      })
        .then((res) => console.log(res))
    }
  }

  return (
    <SearchBox>
      <input
        type='text'
        ref={inputRef} />
      <button onClick={search}>검색</button>
    </SearchBox>
  )
}

export default SearchBoxConatainer