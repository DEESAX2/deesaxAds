import VendorSideBar from "../Components/VendorSideBar";
import { Link } from "react-router";


export default function VendorAdvertList() {
    return (
        <>
            <div className="min-h-screen flex bg-gradient-to-br from-indigo-700 via-blue-400 to-indigo-100 font-sans">
                <VendorSideBar />
                <section className="max-w-5xl mx-auto p-6  min-h-screen">
                    <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">My Adverts</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Repeat this card block for each advert */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center group">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Advert Image"
                                className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                            />
                            <h3 className="text-xl font-bold mt-1 text-gray-800">Advert Title</h3>
                            <p className="text-sm text-gray-500 mt-1 text-center">Brief description of the advert goes here.</p>
                            <p className="text-lg font-bold mt-2 text-blue-600">GHS 99.99</p>
                            <div className="flex justify-between w-full mt-4 text-sm">
                                <Link to="/edit-advert" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Edit</Link>
                                <a href="/vendor/adverts/1/delete" className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200">Delete</a>
                            </div>
                        </div>

                        {/* Another advert card */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center group">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Advert Image"
                                className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                            />
                            <h3 className="text-xl font-bold mt-1 text-gray-800">Another Advert</h3>
                            <p className="text-sm text-gray-500 mt-1 text-center">Another description text goes here.</p>
                            <p className="text-lg font-bold mt-2 text-blue-600">GHS 50.00</p>
                            <div className="flex justify-between w-full mt-4 text-sm">
                                <Link to="/edit-advert" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Edit</Link>
                                <a href="/vendor/adverts/2/delete" className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200">Delete</a>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center group">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Advert Image"
                                className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                            />
                            <h3 className="text-xl font-bold mt-1 text-gray-800">Another Advert</h3>
                            <p className="text-sm text-gray-500 mt-1 text-center">Another description text goes here.</p>
                            <p className="text-lg font-bold mt-2 text-blue-600">GHS 50.00</p>
                            <div className="flex justify-between w-full mt-4 text-sm">
                                <Link to="/edit-advert" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Edit</Link>
                                <a href="/vendor/adverts/2/delete" className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200">Delete</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

// This code defines a React component for displaying a list of vendor advertisements.