import React, { useRef } from "react";
import ScheduleInputField from "@Styles/ScheduleInputField.style";

export default React.memo((props: { addSchedule: (title: string) => void }) => {
  const ref = useRef(null);
  return <ScheduleInputField>
    <input ref={ref} type="text" />
    <button onClick={() => props.addSchedule(ref.current.value)}> + </button>
  </ScheduleInputField>
})
