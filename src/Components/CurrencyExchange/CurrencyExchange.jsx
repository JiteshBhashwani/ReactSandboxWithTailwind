import React, { useState, useEffect } from "react";
import IOBox from "./IOBox";
import useExchangeAPI from "../../hooks/useExchangeAPI";
import swapW from "../../assets/swapW.png";

function CurrencyExchange() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const apiData = useExchangeAPI(from);
  const currencyList = Object.keys(apiData);
  const [inputAmount, setInputAmount] = useState(1);
  const [result, setResult] = useState(0);
  useEffect(
    () => setResult((inputAmount * apiData[to]).toFixed(2)),
    [to, from, inputAmount, apiData]
  );
  return (
    <div className="h-screen flex flex-col justify-center items-center text-stone-300 select-none bg-stone-900 relative">
      <h1 className="absolute text-white sm:text-8xl text-5xl top-12">
        CURRENCY EXCHANGE CALC 💸
      </h1>
      <div className="p-3 bg-green-600 rounded-md flex flex-col items-center">
        <IOBox
          label="From"
          currencyList={currencyList}
          val={inputAmount}
          onValChange={(newAmount) => setInputAmount(newAmount)}
          onCurrencyChange={(newValue) => setFrom(newValue)}
          currentCurrency={from}
        />
        <button
          className="w-8"
          onClick={() => {
            setFrom(to);
            setTo(from);
            setInputAmount(Math.floor(result));
          }}
        >
          <img src={swapW} alt="x" />
        </button>
        <IOBox
          label="To"
          currencyList={currencyList}
          val={result}
          currentCurrency={to}
          onCurrencyChange={(newCurrency) => setTo(newCurrency)}
        />
      </div>
    </div>
  );
}

export default CurrencyExchange;
