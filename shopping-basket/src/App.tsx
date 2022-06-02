import React, { useCallback, useContext } from "react"
import { BasketConetxt, BasketUpdateContext, Provider as BasketProvider } from "./context/BasketContext"

const List = React.memo(() => {
  const basket = useContext(BasketConetxt);
  return <div>
    {basket.map((item) => <div>{item}</div>)}
  </div>
})

const Controll = React.memo(() => {
  const setBasket = useContext(BasketUpdateContext);
  return <div style={{height:"300px"}}>
    <button onClick={useCallback(() => setBasket(["dd"]), [])}>ㅇㅇ</button>
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