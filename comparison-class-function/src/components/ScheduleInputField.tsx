import React, { useRef, useCallback } from "react";
import ScheduleInputField from "@Styles/ScheduleInputField.style";

interface InterfaceProps {
  addSchedule: (title: string) => void;
}

export default React.memo((props: InterfaceProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return <ScheduleInputField>
    <input ref={ref} type="text" />
    <button onClick={useCallback(() => props.addSchedule(ref.current!.value), [])}> + </button>
  </ScheduleInputField>
})