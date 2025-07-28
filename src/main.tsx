import React from "react";
import ReactDOM from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ height: "97vh", padding: "0px" }}>
      <Excalidraw />
    </div>
  </React.StrictMode>,
);
