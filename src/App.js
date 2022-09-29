import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(1);

  const togleButton = (index) => {
    setState(index);
  };

  return (
    <div className="App">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className={state === 1 ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={() => togleButton(1)}
          >
            Active
          </a>
        </li>
        <li className="nav-item">
          <a
            className={state === 2 ? "nav-link active" : "nav-link"}
            href="#"
            onClick={() => togleButton(2)}
          >
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className={state === 3 ? "nav-link active" : "nav-link"}
            href="#"
            onClick={() => togleButton(3)}
          >
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>

      <div className={state === 1 ? " active-content" : "content"}>
        <p className="card">
          Components are the building blocks of any React application, and a
          single app usually consists of multiple components. A component is
          essentially a piece of the user interface. It splits the user
          interface into independent, reusable parts that can be processed
          separately.
        </p>
      </div>
      <div className={state === 2 ? " active-content" : "content"}>
        <p className="card">
          <b>Functional</b> Components: These types of components have no state
          of their own and only contain render methods, and therefore are also
          called stateless components. They may derive data from other
          components as props (properties).
        </p>
      </div>
      <div className={state === 3 ? " active-content" : "content"}>
        <p className="card">something error</p>
      </div>
    </div>
  );
}
