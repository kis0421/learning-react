import React, { useState } from "react"
interface Props {
  name: string
}

export default (props: Props) => {
  const [users, setUsers] = useState(["co", "ko"]);

  return (<>
    <h1>hello, {props.name}</h1>
    <button onClick={() => setUsers([...users, new Date().toString()])}>생성</button>
    <ul>
      {users.map((user) => <li key={user}>{user}</li>)}
    </ul>
  </>)
}