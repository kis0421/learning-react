import React from "react";

export default React.memo((props: { title: string }) => {
    return <article>{props.title}</article>
})