import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(<h1 className="header-style">Hello React</h1>);
