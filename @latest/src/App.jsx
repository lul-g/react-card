import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [cnt, set_cnt] = useState(0);
  let count = 0;
  const [count_jesus, set_count_jesus] = useState(0);

  function print_count(count_type) {
    if (count_type === "count_jesus") {
      console.log("With Jesus:", count_type);
    } else {
      console.log("Without Jesus:", count_type);
    }
  }
  return (
    <div className="App">
      <div className="web">
        <div className="card-jesus">
          <h1>Man trying to get to heaven with Jesus</h1>
          <button
            onClick={() => set_count_jesus((count_jesus) => count_jesus + 1)}
          >
            count is {count_jesus}
          </button>
        </div>
        <div className="card">
          <h1>Man trying to get to heaven without Jesus</h1>
          <button
            onClick={() => {
              count++;
              console.log(count);
              set_cnt((prev) => prev + 1);
            }}
          >
            count is {count}
          </button>
        </div>
      </div>
      <div className="console_log">
        <div className="card-jesus">
          <h1>Man trying to get to heaven with Jesus</h1>
          <h3>console.log({count_jesus})</h3>
        </div>
        <div className="card">
          <h1>Man trying to get to heaven without Jesus</h1>
          <h3>console.log({cnt})</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
