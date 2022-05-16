import React, { useRef, useCallback } from "react";
import ScheduleInputField from "@Styles/ScheduleInputField.style";

export default React.memo((props: { addSchedule: (title: string) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  return <ScheduleInputField>
    <input ref={ref} type="text" />
    <button onClick={useCallback(() => props.addSchedule(ref.current!.value), [])}> + </button>
  </ScheduleInputField>
})
