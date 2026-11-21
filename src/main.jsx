import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <div style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "#102b70",
        color: "white",
        fontSize: "40px",
        zIndex: 9999
    }}>
        React is working!
    </div>
);