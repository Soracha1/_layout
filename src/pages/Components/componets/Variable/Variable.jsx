import "./Variable.css";
function Variable({ type, name, value, setValue }) {
  // //   let value = props.value;
  // //      read    write            initial
  // // const [value, setValue] = useState(props.value || 0);

  return (
    <div className="variable-container">
      <h3 className="variable-title">{name || "Variable"}</h3>
      <div className="variable-button">
        <button className="btn btn-danger" onClick={() => setValue(value - 1)}>
          -
        </button>
        <span className="variable-value">
          {type && type === "int" ? value : value.toFixed(2)}
        </span>
        <button className="btn btn-success" onClick={() => setValue(value + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Variable;
