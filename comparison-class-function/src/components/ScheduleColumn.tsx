import React, { useCallback } from "react";
import ScheduleColumn from "@Styles/ScheduleColumn.style";
interface InterfaceProps {
  title: string,
  removeSchedule: (title: string) => void
}

export default React.memo((props: InterfaceProps) => {
  return <ScheduleColumn>
    <span>{props.title}</span>
    <button style={{ float: "right" }} onClick={useCallback(() => props.removeSchedule(props.title), [])}>X</button>
  </ScheduleColumn>
})