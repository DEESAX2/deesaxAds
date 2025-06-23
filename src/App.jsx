import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./Pages/Register";
import Login from "./pages/Login";
import Home from "./Pages/Home";
import ViewAdvert from "./Pages/ViewAdvert";
import VendorAdvertList from "./Pages/VendorAdvertList";
import PostAdvert from "./pages/PostAdvert";
import AdvertForm from "./Components/AdvertForm";
import VendorDasboard from "./Pages/VendorDashboard"
import NotFound from "./Pages/NotFound";
import VendorProfile from "./Pages/VendorProfile";
import VendorSettings from "./Pages/VendorSettings";

const deesaxConnectRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/view-advert', element: <ViewAdvert /> },
  { path: '/vendor-advert-list', element: <VendorAdvertList /> },
  { path: '/post-advert', element: <PostAdvert /> },
  { path: '/advert-form', element: <AdvertForm /> },
  // Add the vendor dashboard route
  { path: '/vendor-dashboard', element: <VendorDasboard /> },
  { path: '*', element: <NotFound /> },
  { path: '/vendor/profile', element: <VendorProfile   /> },
  // Add other vendor-related routes as needed
  { path: '/vendor/settings', element: <VendorSettings /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={deesaxConnectRouter} />
    </>
  )
}

export default App
