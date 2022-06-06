import React, { useCallback } from "react"
import { BasketProvider, useBasket, useBasketUpdate } from "./context/BasketContext"

const List = () => {
  const basket = useBasket();
  // console.log("List Component")
  return <div>
    {basket.map((item, index) => <div key={index}>{item}</div>)}
  </div>
}

const Controll = React.memo(() => {
  // console.log("Controll Component")
  const basketUpdate = useBasketUpdate();
  const basket = useBasket();
  return <div style={{ height: "300px" }}>
    <button onClick={useCallback(() => basketUpdate([...basket, 19]), [])}>ㅇㅇ</button>
  </div>
})

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