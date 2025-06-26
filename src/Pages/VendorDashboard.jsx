import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import Navbar from "../Components/Navbar";
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
  // Delete advert
  // const handleDelete = async (adId) => {
  //   if (!window.confirm("Are you sure you want to delete this advert?")) return;

  //   try {
  //     await apiClient.delete(`https://ad-api-y20z.onrender.com/api/v1/delete/${adId}`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     alert("Advert deleted!");
  //     mutate("https://ad-api-y20z.onrender.com/api/v1/dashboard/my/dashboard");
  //   } catch (error) {
  //     alert("Failed to delete advert.");
  //     console.error("Delete error:", error.response?.data || error.message);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-gradient-to-br from-[var(--color-nav)] to-[var(--color-light)]">
        <VendorSideBar />
        <main className="flex-1 max-w-6xl mx-auto p-6 bg-white/80 shadow-xl border">
          <header className="flex justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-button2)]">
                Welcome, {vendor?.name || "Vendor"}!
              </h1>
              <p>Manage your adverts.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">{vendor?.name || "Vendor"}</span>
              <img
                src={vendor?.image || "https://via.placeholder.com/40"}
                alt="Avatar"
                className="w-10 h-10 rounded-full border"
              />
            </div>
          </header>
          <header className="flex justify-between mb-6">
            <p>Track your performance.</p>
            <Link
              to="/advert-form"
              className="bg-[var(--color-button1)] text-white px-4 py-2 rounded hover:bg-[var(--color-light)]"
            >
              + New Advert
            </Link>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow border">
              <p className="text-sm text-[var(--color-special)]">Total Adverts</p>
              <p className="text-2xl font-bold text-[var(--color-button1)]">
                {stats?.MytotalAdverts || 0}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow border">
              <p className="text-sm text-[var(--color-special)]">Adverts by Category</p>
              <p className="text-2xl font-bold text-[var(--color-light)]">
                {stats?.myAdvertsPerCategory?.length || 0}
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-4 text-[var(--color-button2)]">My Adverts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {myAdverts?.length ? (
                myAdverts.map((advert) => (
                  <div key={advert.id} className="bg-white p-4 rounded shadow border">
                    <img
                      src={advert.image || "https://via.placeholder.com/400x200"}
                      alt={advert.title}
                      className="w-full h-40 object-cover rounded"
                    />
                    <h3 className="mt-3 text-lg font-bold text-[var(--color-button2)]">
                      {advert.title || `Advert #${advert.id}`}
                    </h3>
                    <p className="text-sm text-[var(--color-special)]">
                      {advert.description || "No description"}
                    </p>
                    <div className="mt-2 flex justify-between text-sm">
                      <Link to={`/edit-advert/${advert.id}`} className="text-[var(--color-button1)] hover:underline">
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

