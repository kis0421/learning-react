import React from "react";
import SheduleInputField from "../components/ScheduleInputField";
import Header from "@Styles/Header.style";

interface InterfaceProps {
  addSchedule: (title: string) => void;
}
export default React.memo(class extends React.Component<InterfaceProps>{
  render() {
    return <>
      <Header>할 일</Header>
      <SheduleInputField addSchedule={this.props.addSchedule} />
    </>
  }
})