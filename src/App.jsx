import {
  Home,
  Counter,
  BGColorChanger,
  PasswordGenerator,
  CurrencyExchange,
  TextUtils,
  CardWithDarkMode,
} from "./Components";

function App() {
  return (
    <>
      <div className="select-none">
        <Home />
        <Counter />
        <BGColorChanger />
        <CardWithDarkMode />
        <TextUtils />
        <PasswordGenerator />
        <CurrencyExchange />
      </div>
    </>
  );
}

export default App;
