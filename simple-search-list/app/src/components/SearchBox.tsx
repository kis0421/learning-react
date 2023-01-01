import { useRef } from 'react';
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

interface Props {
  onChange: (value: string) => void
}

const SearchBoxConatainer = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const search = () => {
    props.onChange(inputRef.current?.value || '')
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