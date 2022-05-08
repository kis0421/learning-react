import React from "react";

import App from "./App.style";
import Header from "./containers/Header";
import SheduleList from "./containers/SheduleList";

export default React.memo(() => {
  return <App>
    <Header />
    <main>
      <SheduleList />
    </main>
  </App >
})