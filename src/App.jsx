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
import AdvertList from "./Components/AdvertList";

const deesaxConnectRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/view-advert', element: <ViewAdvert /> },
  { path: '/post-advert', element: <PostAdvert /> },
  { path: '/vendor-dashboard', element: <VendorDashboard /> },
  { path: '/*', element: <NotFound /> },
  { path: '/advert-list', element: <AdvertList />},
]);

function App() {
  return (
    <>
      <RouterProvider router={deesaxConnectRouter} />
    </>
  )
}

export default App
