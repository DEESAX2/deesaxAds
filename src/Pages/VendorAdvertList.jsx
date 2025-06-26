import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import { apiClient } from "../api/client";

export default function VendorAdvertList() {
    const [adverts, setAdverts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getMyAdverts = async () => {
        setLoading(true);
        setError(null);

        try {
            // Get token from localStorage (adjust based on how you store it)
            const token = localStorage.getItem('token') || localStorage.getItem('authToken');

            if (!token) {
                setError("No authentication token found. Please log in again.");
                // Redirect to login page
                navigate('/login');
                return;
            }

            const response = await apiClient.get("/my/adverts", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            setAdverts(response.data);
        } catch (err) {
            if (err.response) {
                // Server responded with a status code outside 2xx
                if (err.response.status === 401) {
                    setError("Authentication failed. Please log in again.");
                    // Clear invalid token and redirect to login
                    localStorage.removeItem('token');
                    localStorage.removeItem('authToken');
                    navigate('/login');
                } else if (err.response.status === 404) {
                    setError("Adverts not found. Please try again later.");
                } else {
                    setError(`Failed to fetch adverts: ${err.response.data.message || "Server error"}`);
                }
            } else if (err.request) {
                // No response received (network issue, server down, CORS, etc.)
                setError("Network error. Please check your connection or try again later.");
            } else {
                // Other errors (e.g., request setup)
                setError("An unexpected error occurred. Please try again.");
            }
            console.error("Error fetching adverts:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMyAdverts();
    }, []);

    const handleRetry = () => {
        getMyAdverts();
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-indigo-700 via-blue-400 to-indigo-100 font-sans">
            <VendorSideBar />
            <section className="max-w-5xl mx-auto p-6 min-h-screen">
                <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">My Adverts</h2>

                {loading && (
                    <div className="text-center">
                        <p className="text-gray-600">Loading adverts...</p>
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mt-2"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-600 text-center mb-2">{error}</p>
                        <div className="text-center">
                            <button
                                onClick={handleRetry}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {!loading && !error && adverts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg mb-4">No adverts found.</p>
                        <Link
                            to="/create-advert"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                        >
                            Create Your First Advert
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {adverts.map((advert) => (
                            <div
                                key={advert.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center group"
                            >
                                <img
                                    src={advert.image || "https://via.placeholder.com/300x200"}
                                    alt={advert.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x200";
                                    }}
                                />
                                <h3 className="text-xl font-bold mt-1 text-gray-800">{advert.title}</h3>
                                <p className="text-sm text-gray-500 mt-1 text-center line-clamp-3">{advert.description}</p>
                                <p className="text-lg font-bold mt-2 text-blue-600">GHS {advert.price}</p>
                                <p className="text-xs text-gray-400 mt-1">{advert.location}</p>

                                <div className="flex justify-between w-full mt-4 text-sm">
                                    <Link
                                        to={`/edit-advert?id=${advert.id}`}
                                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 px-3 py-1 rounded border border-blue-600 hover:bg-blue-50"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/vendor/adverts/${advert.id}/delete`}
                                        className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-1 rounded border border-red-500 hover:bg-red-50"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
