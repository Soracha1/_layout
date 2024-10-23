import { useState } from "react";

import "./Counter.css";
function Counter(props) {
  //      read    write                initial
  const [value, setValue] = useState(props.value || 0 );

  function increment() {
    setValue(value + 1)
  }

  function decrment() {
    setValue(value - 1)
  }

  return (
    <div className="counter-container">
      <h3 className="counter-title">{props.name || "Counter"}</h3>
      <button className="btn btn-danger" onClick={decrment}>
        -
      </button>
      <span className="counter-value">{value}</span>
      <button className="btn btn-success" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
