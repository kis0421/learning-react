import React from "react";
import SheduleColumn from "../components/SheduleColumn";

export default React.memo(() => {
    return <section>
        {new Array(1).fill("").map((_) => <SheduleColumn title="끝내주게 일어나기" />)}
    </section>
})