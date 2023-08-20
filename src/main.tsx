import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./Router";
import firebase from "./firebase";
import App from "./components/App";

console.log(firebase);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
