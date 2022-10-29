import axios from "axios";
import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

interface Props {
  name: string;
}

const Main = styled.main`
  display: flex;
  width: 300px;
  margin: 0 auto;
  outline: 1px solid #bebebe;
  padding: 12px 24px;
  flex-direction: column;
`;

export default (props: Props) => {
  const [users, setUsers] = useState(["co", "ko"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addUser = useCallback(() => {
    if (inputRef.current !== null) {
      setUsers([...users, inputRef.current.value]);
    }
  }, [users]);

  const { data } = useQuery(["users"], async () => {
    // const { data } = await axios.get("http://naver.com");
    // console.log(data);
    // return data;
  });

  useLayoutEffect(() => {
    console.log("hi");
  }, []);

  return (
    <Main>
      <h1>hello, {props.name}</h1>
      <input type="text" ref={inputRef} />
      <button onClick={addUser}>생성</button>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </Main>
  );
};
