import React from "react";
import ScheduleInputField from "./ScheduleInputField.style";

export default React.memo(() => {
  return <ScheduleInputField>
    <input type="text" />
    <button> + </button>
  </ScheduleInputField>
})
