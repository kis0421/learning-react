import React, { createContext, useState, ReactNode } from "react";

export const BasketConetxt = createContext([]);
export const BasketUpdateContext = createContext((a: any) => console.log("d"));

export const Provider = (props: { children: ReactNode }) => {
  const [basket, setBasket] = useState([]);

  return (
    <BasketConetxt.Provider value={basket}>
      <BasketUpdateContext.Provider value={setBasket as any}>
        {props.children}
      </BasketUpdateContext.Provider>
    </BasketConetxt.Provider>
  )
}