import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./Pages/Register";
import Login from "./pages/Login";
import Home from "./Pages/Home";
import ViewAdvert from "./Pages/ViewAdvert";
import PostAdvert from "./pages/PostAdvert";
import VendorDashboard from "./Pages/VendorDashboard"
import VendorDasboard from "./Pages/VendorDashboard";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import"react-toastify/dist/ReactToastify.css";

const deesaxConnectRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/view-advert', element: <ViewAdvert /> },
  { path: '/post-advert', element: <PostAdvert /> },
  { path: '/vendor-dashboard', element: <VendorDashboard /> },
  { path: '/*', element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={deesaxConnectRouter} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>
  )
}

export default App
