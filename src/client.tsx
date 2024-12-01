import { createRoot } from "react-dom/client";
import { Index } from "./frontend";

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(<Index />);
