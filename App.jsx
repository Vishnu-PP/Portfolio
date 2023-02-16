import { createRoot } from "react-dom/client";
import Home from "./src/pages";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Home />);
