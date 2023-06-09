import React from "react";
import { render } from "react-dom";
import { SelectMenu } from "./lib";

const listTest = ["tata", "toto", "titi"];

render(<SelectMenu list={listTest} />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<SelectMenu list={listTest} />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
