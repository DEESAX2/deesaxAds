import { Link } from "react-router";

export default function VendorSideBar() {
    return (
        <>
            {/* Sidebar */}
            <aside className="w-60 bg-white/80 backdrop-blur-lg shadow-xl rounded-tr-3xl rounded-br-3xl flex flex-col p-8">
                <div className="p-6 border-b">
                    <h2 className="text-3xl font-extrabold text-sky-600 mb-10 tracking-wide">Vendor Panel</h2>
                </div>
                <nav className="p-4 space-y-4 text-sm flex flex-col gap-6">
                    <Link to="/vendor-dashboard" className="flex items-center gap-3 text-gray-700 font-semibold hover:bg-sky-100 px-4 py-2 rounded-lg transition hover:text-blue-600">
            Dashboard
          </Link> 
                    <a href="/vendor-profile" className="flex items-center gap-3 text-gray-700 font-semibold hover:bg-sky-100 px-4 py-2 rounded-lg transition hover:text-blue-600">
                        Profile
                    </a>
                    <Link to="/advert-form" className="flex items-center gap-3 text-gray-700 font-semibold hover:bg-sky-100 px-4 py-2 rounded-lg transition hover:text-blue-600">
                        New Advert
                    </Link>
                    <Link to="/vendor-advert-list" className="flex items-center gap-3 text-gray-700 font-semibold hover:bg-sky-100 px-4 py-2 rounded-lg transition hover:text-blue-600">
                        My Adverts
                    </Link>
                    <Link to="/vendor-settings" className="flex items-center gap-3 text-gray-700 font-semibold hover:bg-sky-100 px-4 py-2 rounded-lg transition hover:text-blue-600">
                        Settings
                    </Link>
                    <a href="/logout" className="flex items-center gap-3 text-red-600  hover:text-red-800">
                        Logout
                    </a>
                </nav>
            </aside>
        </>


    );
}