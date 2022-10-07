import React from "react"

interface Props {
  name: string
}

export default (props: Props) => {
  return (
    <h1>hello, {props.name}</h1>
  )
}