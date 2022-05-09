import React from "react";

export default React.memo((props: { title: string }) => {
  return <article>
    <span>{props.title}</span>
    <button style={{ float: "right" }}>X</button>
  </article>
})