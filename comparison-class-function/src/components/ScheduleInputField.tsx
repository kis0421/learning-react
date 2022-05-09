import React from "react";
import ScheduleInputField from "../styles/ScheduleInputField.style";

export default React.memo(() => {
  return <ScheduleInputField>
    <input type="text" />
    <button> + </button>
  </ScheduleInputField>
})
