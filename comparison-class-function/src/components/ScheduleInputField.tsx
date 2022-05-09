import React from "react";
import ScheduleInputField from "@Styles/ScheduleInputField.style";

export default React.memo(() => {
  return <ScheduleInputField>
    <input type="text" />
    <button> + </button>
  </ScheduleInputField>
})
