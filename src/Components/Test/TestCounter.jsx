import { useState } from "react";

function TestCounter(props) {
  const [Counter, setCounter] = useState(0);
  return <h1>{props.test}</h1>;
}
export default TestCounter;
