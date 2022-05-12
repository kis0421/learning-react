import React from "react";
import SheduleInputField from "../components/ScheduleInputField";
import Header from "@Styles/Header.style";


export default React.memo((props: { addSchedule: (title: string) => void }) => {
  return <>
    <Header>할 일</Header>
    <SheduleInputField addSchedule={props.addSchedule} />
  </>
})