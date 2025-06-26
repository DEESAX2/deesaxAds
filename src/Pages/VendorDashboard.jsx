import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import VendorNav from "../Components/VendorNav";
import Footer from "../Components/Footer";
import { apiClient } from "../api/client";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";

// Fetch dashboard data
const fetcher = (url) =>
  apiClient
    .get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data);

export default function VendorDashboard() {
  // Redirect to login if no token
  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
    return null;
  }

  // Fetch data with SWR
  const { data, error, isLoading } = useSWR(
    "https://ad-api-y20z.onrender.com/api/v1/dashboard/my/dashboard",
    fetcher
  );

  // Handle loading
  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // Handle errors
  if (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error.message}
      </div>
    );
  }

  // Extract data
  const { vendor, stats, myAdverts } = data || {};

  const handleDelete = async (adId) => {
    if (!window.confirm("Are you sure you want to delete this advert?")) return;

    try {
      await apiClient.delete(`https://ad-api-y20z.onrender.com/api/v1/delete/${adId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      toast.success("Advert deleted successfully!");
      mutate("https://ad-api-y20z.onrender.com/api/v1/dashboard/my/dashboard");
    } catch (error) {
      toast.error("Failed to delete advert. Please try again.");
      console.error("Delete error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <VendorNav />
      <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[var(--color-nav)] to-[var(--color-light)]">
        {/* Sidebar: stack on top on mobile, side on desktop */}
        <div className="w-full md:w-auto">
          <VendorSideBar />
        </div>
        <main className="flex-1 w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-6 bg-white/80 shadow-xl border rounded-lg">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[var(--color-button2)]">
                Welcome, {vendor?.name || "Vendor"}!
              </h1>
              <p className="text-sm sm:text-base">Manage your adverts.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm sm:text-base">{vendor?.name || "Vendor"}</span>
              <img
                src={vendor?.image || "https://via.placeholder.com/40"}
                alt="Avatar"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border"
              />
            </div>
          </header>
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <p className="text-sm sm:text-base">Track your performance.</p>
            <Link
              to="/advert-form"
              className="bg-[var(--color-button1)] text-white px-4 py-2 rounded hover:bg-[var(--color-light)] text-sm sm:text-base w-full md:w-auto text-center"
            >
              + New Advert
            </Link>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow border flex flex-col items-center">
              <p className="text-xs sm:text-sm text-[var(--color-special)]">Total Adverts</p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--color-button1)]">
                {stats?.MytotalAdverts || 0}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow border flex flex-col items-center">
              <p className="text-xs sm:text-sm text-[var(--color-special)]">Adverts by Category</p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--color-light)]">
                {stats?.myAdvertsPerCategory?.length || 0}
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-[var(--color-button2)]">My Adverts</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {myAdverts?.length ? (
                myAdverts.map((advert) => (
                  <div key={advert.id} className="bg-white p-3 sm:p-4 rounded shadow border flex flex-col">
                    <img
                      src={advert.image || "https://via.placeholder.com/400x200"}
                      alt={advert.title}
                      className="w-full h-32 sm:h-40 object-cover rounded"
                    />
                    <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold text-[var(--color-button2)]">
                      {advert.title || `Advert #${advert.id}`}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-special)]">
                      {advert.description || "No description"}
                    </p>
                    <div className="mt-2 flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm">
                      <Link to={`/edit-advert?id=${advert.id}`} className="text-[var(--color-button1)] hover:underline">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(advert.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No adverts available.</p>
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}