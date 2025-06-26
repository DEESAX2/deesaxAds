import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { apiClient } from "../api/client";
import useSWR from "swr";

// SWR fetcher function
const fetcher = (url) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  return apiClient
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export default function VendorDashboard() {
  // Check for token on component mount
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
    return null;
  }

  // Use SWR to fetch dashboard data
  const { data, error, isLoading } = useSWR(
    "https://ad-api-y20z.onrender.com/api/v1/dashboard/my/dashboard",
    fetcher
  );

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-button2)]">Loading dashboard...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    if (error.message === "No authentication token found" || error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return null;
    }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading dashboard: {error.message}</p>
      </div>
    );
  }

  // Extract data from response
  const { vendor, stats, myAdverts } = data || {};

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
        <VendorSideBar />
        <div className="flex-1 max-w-6xl mx-auto p-6 bg-white/80 backdrop-blur-lg shadow-xl border border-[var(--color-nav)]">
          <main className="flex-1 p-10 flex flex-col gap-8">
            <header className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-button2)]">
                  Welcome back, {vendor?.name || "Vendor"}!
                </h1>
                <p className="text-black mt-1">Here's your business at a glance.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[var(--color-button2)]">
                  {vendor?.name || "Vendor"}
                </span>
                <img
                  src={vendor?.image || "https://via.placeholder.com/40"}
                  alt="Vendor Avatar"
                  className="w-10 h-10 rounded-full border border-[var(--color-special)] shadow-sm"
                />
              </div>
            </header>
            <header className="flex items-center justify-between mb-6">
              <p className="text-black mt-1">Manage your adverts and track performance.</p>
              <Link
                to="/advert-form"
                className="bg-[var(--color-button1)] text-white px-4 py-2 rounded hover:bg-[var(--color-light)] transition"
              >
                + Post New Advert
              </Link>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded shadow border border-[var(--color-nav)]">
                <p className="text-sm text-[var(--color-special)]">My Total Adverts</p>
                <p className="text-2xl font-bold text-[var(--color-button1)]">
                  {stats?.MytotalAdverts || 0}
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow border border-[var(--color-nav)]">
                <p className="text-sm text-[var(--color-special)]">My Adverts Per Category</p>
                <p className="text-2xl font-bold text-[var(--color-light)]">
                  {stats?.myAdvertsPerCategory?.length || 0}
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4 text-[var(--color-button2)]">
                My Adverts
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myAdverts && myAdverts.length > 0 ? (
                  myAdverts.map((advert) => (
                    <div
                      key={advert.id}
                      className="bg-white p-4 rounded shadow border border-[var(--color-nav)]"
                    >
                      <img
                        src={advert.image || "https://via.placeholder.com/400x200"}
                        alt={advert.title}
                        className="w-full h-40 object-cover rounded"
                      />
                      <h3 className="mt-3 text-lg font-bold text-[var(--color-button2)]">
                        {advert.title || `Advert #${advert.id}`}
                      </h3>
                      <p className="text-sm text-[var(--color-special)]">
                        {advert.description || "No description available"}
                      </p>
                      <div className="mt-2 flex justify-between text-sm">
                        <Link
                          to={`/edit-advert/${advert.id}`}
                          className="text-[var(--color-button1)] hover:underline"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/vendor/adverts/${advert.id}/delete`}
                          className="text-red-500 hover:underline"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-[var(--color-special)]">No adverts available.</p>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}



// import { Link } from "react-router";
// import VendorSideBar from "../Components/VendorSideBar";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { apiClient, apiFetcher } from "../api/client";
// import SWR from "swr";



// export default function VendorDashboard() {

//   const { data, isLoading, error } = useSWR('/dashboard/my/dashboard', apiFetcher);

//   const getDashboard = async (data) => {
//     try {
//       const response = await apiClient.get('/dashboard/my/dashboard', data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }

//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
//         {/* Sidebar */}
//         <VendorSideBar />
//         <div className="flex-1 max-w-6xl mx-auto p-6 bg-white/80 backdrop-blur-lg  shadow-xl border border-[var(--color-nav)]">
//           {/* Main Content */}
//           <main className="flex-1 p-10 flex flex-col gap-8">
//             {/* Header */}
//             <header className="flex items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-button2)]">
//                   Welcome back, Vendor!
//                 </h1>
//                 <p className="text-black mt-1">
//                   Here's your business at a glance.
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="font-semibold text-[var(--color-button2)]">Earl</span>
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Vendor Avatar"
//                   className="w-10 h-10 rounded-full border border-[var(--color-special)] shadow-sm"
//                 />
//               </div>
//             </header>

//             {/* Button to Post New Advert */}
//             <header className="flex items-center justify-between mb-6">
//               <p className="text-black mt-1">
//                 Manage your adverts and track performance.
//               </p>
//               <Link
//                 to="/advert-form"
//                 className="bg-[var(--color-button1)] text-white px-4 py-2 rounded hover:bg-[var(--color-light)] transition"
//               >
//                 + Post New Advert
//               </Link>
//             </header>

//             {/* Stats Section */}
//             <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//               <div className="bg-white p-4 rounded shadow border border-[var(--color-nav)]">
//                 <p className="text-sm text-[var(--color-special)]"> My Total Adverts</p>
//                 <p className="text-2xl font-bold text-[var(--color-button1)]">3</p>
//               </div>
//               <div className="bg-white p-4 rounded shadow border border-[var(--color-nav)]">
//                 <p className="text-sm text-[var(--color-special)]">My Advert Per Category</p>
//                 <p className="text-2xl font-bold text-[var(--color-light)]">2</p>
//               </div>
//             </section>

//             {/* Adverts List */}
//             <section>
//               <h2 className="text-lg font-semibold mb-4 text-[var(--color-button2)]">
//                 My Adverts
//               </h2>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {[1, 2, 3].map((id) => (
//                   <div
//                     key={id}
//                     className="bg-white p-4 rounded shadow border border-[var(--color-nav)]"
//                   >
//                     <img
//                       src="https://via.placeholder.com/400x200"
//                       alt="Advert"
//                       className="w-full h-40 object-cover rounded"
//                     />
//                     <h3 className="mt-3 text-lg font-bold text-[var(--color-button2)]">
//                       Advert #{id}
//                     </h3>
//                     <p className="text-sm text-[var(--color-special)]">
//                       Description for advert #{id}
//                     </p>
//                     <div className="mt-2 flex justify-between text-sm">
//                       <Link to={`/edit-advert/${id}/edit`}
//                         className="text-[var(--color-button1)] hover:underline"
//                       >
//                         Edit
//                       </Link>
//                       <a
//                         href={`/vendor/adverts/${id}/delete`}
//                         className="text-red-500 hover:underline"
//                       >
//                         Delete
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }