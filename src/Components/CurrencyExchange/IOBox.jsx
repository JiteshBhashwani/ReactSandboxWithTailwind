import React from "react";

function IOBox({
  label,
  val,
  onValChange,
  editable,
  currentCurrency,
  currencyList,
  onCurrencyChange,
  tailwindClasses,
}) {
  return (
    <div
      className={`${tailwindClasses} flex bg-slate-100 text-slate-500 px-4 py-2 gap-4 shadow shadow-slate-700/50 rounded-md`}
    >
      <div className="flex flex-col">
        <label htmlFor="valInputField">{label}</label>
        <input
          type="number"
          className="text-slate-900 outline-none bg-transparent max-sm:w-40"
          value={val}
          onChange={(e) => {
            onValChange && onValChange(Number(e.target.value));
          }}
          id="valInputField"
        />
      </div>
      <div>
        <p>Currency</p>
        <select
          name="currencySelector"
          id="currencySelector"
          value={currentCurrency}
          className="bg-transparent outline-none text-slate-900"
          onChange={(e) => {
            return onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyList.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default IOBox;
