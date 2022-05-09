import React, { useState } from "react";
import ScheduleColumn from "../components/ScheduleColumn";

export default React.memo(() => {
    const [state, setState] = React.useState([]);

    return <section>
        {new Array(1).fill("").map((_) => <ScheduleColumn title="끝내주게 일어나기" />)}
    </section>
})