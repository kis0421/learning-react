import React from "react";
import SheduleInputField from "../components/ScheduleInputField";
import Header from "../styles/Header.style";


export default React.memo(() => {
  return <>
    <Header>할 일</Header>
    <SheduleInputField />
  </>
})