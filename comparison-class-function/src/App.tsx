import React, { useState, useCallback } from "react";

import App from "@Styles/App.style";
import Header from "./containers/Header";
import ScheduleList from "./containers/ScheduleList";

export default React.memo(() => {
  const [state, setState] = useState(new Set("a") as Set<string>);
  const removeSchedule = useCallback((title: string) => {
    state.delete(title);
    setState(new Set(state));
  }, []);

  const addSchedule = useCallback((title: string) => {
    state.add(title);
    setState(new Set(state))
  }, [])

  return <App>
    <Header addSchedule={addSchedule}/>
    <main>
      <ScheduleList schedules={state} removeSchedule={removeSchedule}/>
    </main>
  </App >
})