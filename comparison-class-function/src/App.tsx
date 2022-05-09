import React from "react";

import App from "./styles/App.style";
import Header from "./containers/Header";
import ScheduleList from "./containers/ScheduleList";

export default React.memo(() => {
  return <App>
    <Header />
    <main>
      <ScheduleList />
    </main>
  </App >
})