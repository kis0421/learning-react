import React, { useState, useCallback } from "react";

import App from "@Styles/App.style";
import Header from "./containers/Header";
import ScheduleList from "./containers/ScheduleList";

interface InterfaceState {
  list: Set<string>
}
export default React.memo(class extends React.Component<{}, InterfaceState> {

  state: InterfaceState = {
    list: new Set(),
  }

  addSchedule = (title: string) => {
    this.state.list.add(title);
    this.setState({
      list: new Set(this.state.list)
    })
  }

  removeSchedule = (title: string) => {
    this.state.list.delete(title);
    this.setState({
      list: new Set(this.state.list)
    })
  }

  render() {
    return (<App>
      <Header addSchedule={this.addSchedule} />
      <main>
        <ScheduleList schedules={this.state.list} removeSchedule={this.removeSchedule} />
      </main>
    </App >)
  }
})