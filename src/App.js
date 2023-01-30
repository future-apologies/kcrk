import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart"
import SingleProduct from "./components/SingleProduct";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// create a header layout with an <Outlet/> to render the child elements of the navbar
const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

// create a router structure with paths to elements to pass into the RouterProvider
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/productsList/:id",
        element: <SingleProduct />
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* use RouterProvider with the router from above */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
