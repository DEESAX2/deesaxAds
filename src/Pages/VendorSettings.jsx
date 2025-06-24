import VendorSideBar from "../Components/VendorSideBar";

export default function VendorSettings({vendor}) {
    return (
        <>
            <div className="flex">
                <VendorSideBar />
                <div className="min-h-screen flex-1 bg-gradient-to-br from-cyan-100 via-gray-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 text-gray-800 dark:text-gray-100">
                    <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 p-10 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700">
                        <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight">Account Settings</h1>

                        {/* Profile Photo Upload */}
                        <section className="mb-10">
                            <h2 className="text-lg font-semibold mb-3">Profile Picture</h2>
                            <div className="flex items-center gap-6">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-cyan-200 dark:border-blue-700 shadow"
                                />
                                <div>
                                    <label
                                        htmlFor="profilePhoto"
                                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                                    >
                                        Upload New Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="profilePhoto"
                                        name="profilePhoto"
                                        accept="image/*"
                                        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 dark:file:bg-blue-900 dark:file:text-blue-200"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Profile Info */}
                        <form method="POST" action="/vendor-settings/update" className="space-y-10">
                            <div>
                                <h2 className="text-lg font-semibold mb-3">Profile Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 transition"
                                            defaultValue="Vendor Joe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 transition"
                                            defaultValue="AdTech Ltd"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 transition"
                                            defaultValue="vendor@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 transition"
                                            defaultValue="+233123456789"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 transition"
                                            defaultValue="123 Main St, Accra"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save Changes Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                        {/* Divider */}
                        <hr className="my-10 border-gray-300 dark:border-gray-600" />
                        {/* Account Delete Section */}
                        <section className="text-red-500 dark:text-red-700">
                            <h2 className="text-lg font-semibold mb-4">Danger Zone</h2>
                            <form method="POST" action="/vendor-settings/delete-account">
                                <p className="mb-4">
                                    Once your account is deleted, all your data will be permanently removed. This action cannot be undone.
                                </p>
                                <label className="block text-sm mb-2">
                                    <input type="checkbox" name="confirmDelete" required className="mr-2" />
                                    I understand and want to delete my account
                                </label>
                                <button
                                    type="submit"
                                    className="bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Delete Account
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

        </>
    );
}
