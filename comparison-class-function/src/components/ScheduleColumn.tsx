import React, { useCallback } from "react";
import ScheduleColumn from "@Styles/ScheduleColumn.style";

export default React.memo((props: { title: string, removeSchedule: (title: string) => void }) => {
  return <ScheduleColumn>
    <span>{props.title}</span>
    <button style={{ float: "right" }} onClick={useCallback(() => props.removeSchedule(props.title), [])}>X</button>
  </ScheduleColumn>
})