import React from "react";

import App from "./App.style";
import Header from "./containers/Header";
import SheduleColumn from "./components/SheduleColumn";

export default React.memo(() => {
  return <App>
    <Header />
    <main>
      <section>
        {new Array(1).fill("").map((_) => <SheduleColumn title="끝내주게 일어나기" />)}
      </section>
    </main>
  </App >
})