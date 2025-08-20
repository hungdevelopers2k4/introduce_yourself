import { createHashRouter } from "react-router-dom";
import App from "../App"; 
import Home from "../web/home.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
]);

export default router;