import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "virtual:fonts.css";
import AppRoutes from "./routes/routes.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
