import { useState, useCallback } from "react";
import constate from "constate";

function useBasketConstate() {
  const [basket, setBasket] = useState<any[]>([]);
  const updateBasket = useCallback((newBasket: any) => {
    console.log(new Date().toString())
    setBasket([...basket, new Date().toString()]);
  }, [basket]);

  return { basket, updateBasket };
}

export const [BasketProvider, useBasket, useBasketUpdate] = constate(
  useBasketConstate,
  value => value.basket,
  value => value.updateBasket
);