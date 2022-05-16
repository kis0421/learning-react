import React, { createRef, useCallback } from "react";
import ScheduleInputField from "@Styles/ScheduleInputField.style";


interface InterfaceProps {
  addSchedule: (title: string) => void;
}
export default React.memo(class extends React.Component<InterfaceProps>{
  ref = createRef<HTMLInputElement>();

  render() {
    return <ScheduleInputField>
      <input ref={this.ref} type="text" />
      <button onClick={() => this.props.addSchedule(this.ref.current!.value)}> + </button>
    </ScheduleInputField>
  }
})