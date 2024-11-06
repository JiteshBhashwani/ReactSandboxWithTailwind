import {
  Home,
  Counter,
  BGColorChanger,
  PasswordGenerator,
  CurrencyExchange,
  TextUtils,
} from "./Components";

function App() {
  return (
    <>
      <div className="select-none">
        <Home />
        <Counter />
        <BGColorChanger />
        <TextUtils />
        <PasswordGenerator />
        <CurrencyExchange />
      </div>
    </>
  );
}

export default App;
