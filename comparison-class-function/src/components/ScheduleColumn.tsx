import React from "react";
import ScheduleColumn from "@Styles/ScheduleColumn.style";
interface InterfaceProps {
  title: string,
  removeSchedule: (title: string) => void
}
export default React.memo(class extends React.Component<InterfaceProps>{
  render() {
    return <ScheduleColumn>
      <span>{this.props.title}</span>
      <button style={{ float: "right" }} onClick={() => this.props.removeSchedule(this.props.title)}>X</button>
    </ScheduleColumn>
  }
})