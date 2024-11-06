import { useState, useEffect } from "react";

export default function useExchangeAPI(currency) {
  const [data, SetData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => SetData(response[currency]));
  }, [currency]);
  return data;
}
