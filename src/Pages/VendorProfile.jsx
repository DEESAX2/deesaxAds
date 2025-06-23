import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";

export default function VendorProfile() {
    return (
        <>
        <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-blue-100 font-sans">
            <VendorSideBar />
            <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex-1">
                <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">Vendor Profile</h2>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Vendor Avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Vendor Name</h3>
                            <p className="text-sm text-gray-500">
                                Vendor description goes here. This can include business details, location, and contact information.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h4>
                            <p className="text-sm text-gray-600">Email:
                                <span className="font-medium text-gray-800"></span>
                            </p>
                            <p className="text-sm text-gray-600">Phone:
                                <span className="font-medium text-gray-800"></span>
                            </p>
                            <p className="text-sm text-gray-600">Address:
                                <span className="font-medium text-gray-800"></span>
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Business Details</h4>
                            <p className="text-sm text-gray-600">Business Type:
                                <span className="font-medium text-gray-800"></span>
                            </p>
                            <p className="text-sm text-gray-600">Established:
                                <span className="font-medium text-gray-800"></span>
                            </p>
                            <p className="text-sm text-gray-600">Website:
                                <span className="font-medium text-blue-600 hover:underline"></span>
                            </p>
                            <p className="text-sm text-gray-600">Social Media:
                                <span className="font-medium text-blue-600 hover:underline"></span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Actions</h4>
                        <div className="flex space-x-4">
                            <Link to="/vendor-settings" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Edit Profile
                            </Link>
                            <Link to="/vendor-advert-list" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                View Adverts
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-600">Posted a new advert for "Product Name" on 2023-10-01.</p>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-600">Updated profile information on 2023-09-28.</p>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-600">Received a new message from a customer on 2023-09-25.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
// This component represents the Vendor Profile page, displaying vendor information, contact details, and recent activity.
// It includes sections for contact information, business details, and actions like editing the profile or viewing adverts.
// The layout is styled with Tailwind CSS for a clean and modern look, ensuring a responsive