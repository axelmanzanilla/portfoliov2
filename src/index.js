import React from "react";
import ReactDOM from "react-dom/client";
import HttpsRedirect from "react-https-redirect";
import App from "./components/App/App";
import "./i18n";
import "boxicons/css/boxicons.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HttpsRedirect>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HttpsRedirect>
);
