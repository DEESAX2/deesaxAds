import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";


export default function VendorDashboardPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 font-sans">
      {/* Sidebar */}
      <VendorSideBar />
      <div className="flex-1 max-w-6xl mx-auto p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-sky-100">

        {/* Main Content */}
        <main className="flex-1 p-10 flex flex-col gap-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Welcome back, Vendor!</h1>
              <p className="text-slate-500 mt-1">Here’s your business at a glance.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">Earl</span>
              <img
                src="https://via.placeholder.com/40"
                alt="Vendor Avatar"
                className="w-10 h-10 rounded-full border border-slate-200 shadow-sm"
              />
            </div>
          </header>

          {/* Button to Post New Advert */}
          <header className="flex items-center justify-between mb-6">
            <p className="text-slate-500 mt-1">Manage your adverts and track performance.</p>
            {/* Button to Post New Advert */}
            <Link to="/advert-form" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              + Post New Advert
            </Link>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Total Adverts</p>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Active Listings</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Pending Approvals</p>
              <p className="text-2xl font-bold text-yellow-500">0</p>
            </div>
          </section>

          {/* Adverts List */}
          <section>
            <h2 className="text-lg font-semibold mb-4">My Ads</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3,].map((id) => (
                <div key={id} className="bg-white p-4 rounded shadow">
                  <img
                    src="https://via.placeholder.com/400x200"
                    alt="Advert"
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-3 text-lg font-bold text-gray-700">Advert #{id}</h3>
                  <p className="text-sm text-gray-500">Description for advert #{id}</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <a href={`/vendor/adverts/${id}/edit`} className="text-blue-600 hover:underline">
                      Edit
                    </a>
                    <a href={`/vendor/adverts/${id}/delete`} className="text-red-600 hover:underline">
                      Delete
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Unique Section
          <section className="mt-8">
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-100">
              <div>
                <h2 className="text-xl font-bold text-sky-700 mb-2">Grow your business with deesaxAds</h2>
                <p className="text-slate-500">Access analytics, manage products, and connect with more customers.</p>
              </div>
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition">
                Upgrade Now
              </button>
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}
