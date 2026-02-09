import React from "react";    //import react library
import ReactDOM from "react-dom/client";  //conncts react to browser,client-faster rendering,modern react 18
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(  //displays component on screen ,jsx->html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
