import Counter from "./componets/Counter/Counter";
import Timer from "./componets/Timer/Timer";
import Add from "./componets/Add/Add";

// import styles
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Temperatures from "./componets/Temperatures/Temperatures";

function Components() {
  return (
    <div className="Components-display">
      <div className="Components">
      <h1 className="Components-title">REACT COMPONENTS</h1>
      <div className="Components-container">
        <div className="Components-counter">
          <Counter value={10} />
        </div>
        <div className="Components-add">
          <Add />
        </div>
        <div className="Components-timer">
          <Timer />
        </div>
      </div>
        <Temperatures />
    </div>
    </div>
  );
}

export default Components;
