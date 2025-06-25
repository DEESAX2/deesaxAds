import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ViewAdvert from "./Pages/ViewAdvert";
import PostAdvert from "./Pages/PostAdvert";
import VendorDashboard from "./Pages/VendorDashboard"
import NotFound from "./Pages/NotFound";
import AdvertList from "./Pages/AdvertList";
import { ToastContainer } from "react-toastify";
import VendorSettings from "./Pages/VendorSettings";
import VendorProfile from "./Pages/VendorProfile";
import VendorAdvertList from "./Pages/VendorAdvertList";
import AdvertForm from "./Components/AdvertForm";
import EditAdvert from "./Pages/EditAdvert";
import Register from "./Pages/Register";
import HomeUser from "./Pages/HomeUser";
import MeetTeam from "./Pages/MeetTeam";


const deesaxConnectRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/view-advert', element: <ViewAdvert /> },
  { path: '/post-advert', element: <PostAdvert /> },
  { path: '/vendor-dashboard', element: <VendorDashboard /> },
  { path: '/vendor-settings', element: <VendorSettings /> },
  { path: '/vendor-profile', element: <VendorProfile /> },
  { path: '/vendor-advert-list', element: <VendorAdvertList /> },
  { path: '/advert-form', element: <AdvertForm /> },
  { path: '/edit-advert', element: <EditAdvert /> },
  { path: '*', element: <NotFound /> },
  { path: '/advert-list', element: <AdvertList />},
  { path: '/home-user', element: <HomeUser/>},
  { path: '/meet-team', element: <MeetTeam/>},
  
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
