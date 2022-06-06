import { useState, useCallback } from "react";
import constate from "constate";

function useBasketConstate({ initialCount = [] }) {
  const [basket, setBasket] = useState<any[]>(initialCount);
  const updateBasket = useCallback((newBasket: any[]) => setBasket(newBasket), []);
  return { basket, updateBasket };
}

export const [BasketProvider, useBasket, useBasketUpdate] = constate(
  useBasketConstate,
  value => value.basket,
  value => value.updateBasket
);