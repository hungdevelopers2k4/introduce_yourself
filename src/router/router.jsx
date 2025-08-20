// src/router/router.jsx
import { createHashRouter } from "react-router-dom";
import App from "../App"
import Home from "../web/home"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
    ],
  },
]);

export default router;
