import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"shop",
    element: <Shop />
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
