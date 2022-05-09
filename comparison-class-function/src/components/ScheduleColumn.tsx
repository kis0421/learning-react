import React from "react";
import ScheduleColumn from "./ScheduleColumn.style";

export default React.memo((props: { title: string }) => {
  return <ScheduleColumn>
    <span>{props.title}</span>
    <button style={{ float: "right" }}>X</button>
  </ScheduleColumn>
})