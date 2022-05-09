import React from "react";
import ScheduleColumn from "../components/ScheduleColumn";

export default React.memo((props: { schedules: Set<string>, removeSchedule: (title: string) => void }) => {
    return <section>
        {Array.from(props.schedules).map((i) => <ScheduleColumn key={i} title={i} removeSchedule={props.removeSchedule} />)}
    </section>
})