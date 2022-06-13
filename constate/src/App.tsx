import React, { useCallback, useState, useMemo } from "react"
import { BasketProvider, useBasket, useBasketUpdate } from "./context/BasketContext"

const List = () => {
  const basket = useBasket();
  console.log("List Component")
  return <div>
    {basket.map((item, index) => <div key={index}>{item}</div>)}
  </div>
}

const Controll = () => {
  console.log("Controll Component")
  const basketUpdate = useBasketUpdate();
  return <div style={{ height: "300px" }}>
    <button onClick={basketUpdate}>ㅇㅇ</button>
  </div>
}

const App = () => {
  return <>
    <Controll />
    <List />
  </>
}

export default () => {
  return (
    <BasketProvider>
      <App />
    </BasketProvider>
  )
}