import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";

import App from "./pages/App.jsx";
import Obrigado from "./pages/Obrigado.jsx";

const rota = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/obrigado",
      element: <Obrigado />,
    },
  ],
  { basename: "/nosso-produto/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rota} />
  </StrictMode>
);
