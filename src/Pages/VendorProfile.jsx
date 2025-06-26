import { Link } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import { useState } from "react";



export default function VendorProfile() {
    // Store auth token in component state instead of localStorage
    const [authToken, setAuthToken] = useState("sample-bearer-token-123");

    const [user, setUser] = useState({
        firstName: "Desmond",
        lastName: "Linc",
        email: "deslinc19@gmail.com",
        role: "vendor",
        image: "https://via.placeholder.com/100",
        createdAt: "2023-09-01T00:00:00Z",
        updatedAt: "2023-09-28T00:00:00Z",
        id: "12345",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: "",
        confirmPassword: "",
        role: user.role,
        image: null
    });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear message when user starts typing
        if (message) {
            setMessage("");
            setMessageType("");
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                setMessage("File size must be less than 5MB");
                setMessageType("error");
                return;
            }
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setMessage("Please select a valid image file");
                setMessageType("error");
                return;
            }
        }
        setFormData({ ...formData, image: file });
    };

    const validateForm = () => {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setMessage("First name and last name are required");
            setMessageType("error");
            return false;
        }

        if (!formData.email.trim()) {
            setMessage("Email is required");
            setMessageType("error");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage("Please enter a valid email address");
            setMessageType("error");
            return false;
        }

        if (formData.password && formData.password.length < 6) {
            setMessage("Password must be at least 6 characters long");
            setMessageType("error");
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            setMessageType("error");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setMessage("");
        setMessageType("");

        const data = new FormData();
        data.append("firstName", formData.firstName.trim());
        data.append("lastName", formData.lastName.trim());
        data.append("email", formData.email.trim());

        // Only include password if it's being updated
        if (formData.password) {
            data.append("password", formData.password);
            data.append("confirmPassword", formData.confirmPassword);
        }

        data.append("role", formData.role);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await fetch("https://ad-api-y20z.onrender.com/api/v1/users/update", {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                setUser(result.user);
                setMessage("Profile updated successfully!");
                setMessageType("success");
                setIsEditing(false);
                // Reset password fields
                setFormData(prev => ({
                    ...prev,
                    password: "",
                    confirmPassword: ""
                }));
            } else {
                setMessage(result.message || "Failed to update profile");
                setMessageType("error");
            }
        } catch (error) {
            setMessage("Network error. Please check your connection and try again.");
            setMessageType("error");
            console.error("Error updating profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = () => {
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "",
            confirmPassword: "",
            role: user.role,
            image: null
        });
        setMessage("");
        setMessageType("");
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setMessage("");
        setMessageType("");
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "",
            confirmPassword: "",
            role: user.role,
            image: null
        });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-blue-200 via-blue-300 to-blue-100 font-sans">
            <VendorSideBar />
            <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex-1">
                <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">
                    Vendor Profile
                </h2>

                {/* Global Message Display */}
                {message && (
                    <div className={`mb-4 p-4 rounded-lg ${messageType === 'success'
                            ? 'bg-green-100 border border-green-400 text-green-700'
                            : 'bg-red-100 border border-red-400 text-red-700'
                        }`}>
                        {message}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-6 mb-8">
                        <div className="relative">
                            <img
                                src={user.image}
                                alt="Vendor Avatar"
                                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                            />
                            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {`${user.firstName} ${user.lastName}`}
                            </h3>
                            <p className="text-lg text-blue-600 font-medium capitalize">
                                {user.role}
                            </p>
                            <p className="text-sm text-gray-500">
                                Member since {formatDate(user.createdAt)}
                            </p>
                        </div>
                    </div>

                    {/* Profile Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h4>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Email:</span>
                                    <span className="ml-2 text-gray-800">{user.email}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">User ID:</span>
                                    <span className="ml-2 text-gray-800">{user.id}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Account Details</h4>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Last Updated:</span>
                                    <span className="ml-2 text-gray-800">{formatDate(user.updatedAt)}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Status:</span>
                                    <span className="ml-2 text-green-600 font-medium">Active</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {!isEditing && (
                        <div className="flex flex-wrap gap-4 mb-6">
                            <button
                                onClick={handleEditClick}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                                Edit Profile
                            </button>
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                                View Adverts
                            </button>
                        </div>
                    )}

                    {/* Edit Profile Form */}
                    {isEditing && (
                        <div className="border-t pt-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h3>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Leave blank to keep current password"
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Confirm new password"
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Role
                                    </label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled={isLoading}
                                    >
                                        <option value="vendor">Vendor</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Profile Image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleFileChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        accept="image/*"
                                        disabled={isLoading}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Max file size: 5MB. Supported formats: JPG, PNG, GIF
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${isLoading
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-blue-600 hover:bg-blue-700'
                                            } text-white`}
                                    >
                                        {isLoading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        disabled={isLoading}
                                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


// export default function VendorProfile() {
//     const [user, setUser] = useState({
//         firstName: "Desmond",
//         lastName: "Linc",
//         email: "deslinc19@gmail.com",
//         role: "vendor",
//         image: "https://via.placeholder.com/100",
//         createdAt: "2023-09-01T00:00:00Z",
//         updatedAt: "2023-09-28T00:00:00Z",
//         id: "12345",
//     });
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         password: "",
//         confirmPassword: "",
//         role: user.role,
//     });
//     const [message, setMessage] = useState("");

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             setMessage("Passwords do not match");
//             return;
//         }

//         const data = new FormData();
//         data.append("firstName", formData.firstName);
//         data.append("lastName", formData.lastName);
//         data.append("email", formData.email);
//         data.append("password", formData.password);
//         data.append("confirmPassword", formData.confirmPassword);
//         data.append("role", formData.role);
//         if (formData.image) data.append("image", formData.image);

//         try {
//             const response = await fetch("https://ad-api-y20z.onrender.com/api/v1/users/update", {
//                 method: "PATCH",
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
//                 },
//                 body: data,
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 setUser(result.user);
//                 setMessage("Profile updated successfully");
//                 setIsEditing(false);
//             } else {
//                 setMessage(result.message || "Failed to update profile");
//             }
//         } catch (error) {
//             setMessage("Error updating profile");
//         }
//     };

//     return (
//         <div className="min-h-screen flex bg-gradient-to-br from-blue-200 via-blue-300 to-blue-100 font-sans">
//             <VendorSideBar />
//             <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex-1">
//                 <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">Vendor Profile</h2>
//                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                     <div className="flex items-center space-x-4 mb-6">
//                         <img src={user.image} alt="Vendor Avatar" className="w-24 h-24 rounded-full object-cover" />
//                         <div>
//                             <h3 className="text-xl font-bold text-gray-800">{`${user.firstName} ${user.lastName}`}</h3>
//                             <p className="text-sm text-gray-500">Vendor role: {user.role}</p>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-gray-50 p-4 rounded-lg shadow">
//                             <h4 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h4>
//                             <p className="text-sm text-gray-600">Email: <span className="font-medium text-gray-800">{user.email}</span></p>
//                         </div>
//                         <div className="mt-6">
//                             <h4 className="text-lg font-semibold text-gray-700 mb-2">Actions</h4>
//                             <div className="flex space-x-4">
//                                 <button
//                                     onClick={() => setIsEditing(true)}
//                                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                                 >
//                                     Edit Profile
//                                 </button>
//                                 <Link to="/vendor-advert-list" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//                                     View Adverts
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     {isEditing && (
//                         <div className="mt-8">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h3>
//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Password</label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                                     <input
//                                         type="password"
//                                         name="confirmPassword"
//                                         value={formData.confirmPassword}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Role</label>
//                                     <input
//                                         type="text"
//                                         name="role"
//                                         value={formData.role}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border rounded"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Profile Image</label>
//                                     <input type="file" name="image" onChange={handleFileChange} className="mt-1 p-2 w-full" />
//                                 </div>
//                                 <div className="flex space-x-4">
//                                     <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                                         Save Changes
//                                     </button>
//                                     <button
//                                         type="button"
//                                         onClick={() => setIsEditing(false)}
//                                         className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                                 {message && <p className="text-sm text-red-600">{message}</p>}
//                             </form>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { Link } from "react-router";
// import VendorSideBar from "../Components/VendorSideBar";


// export default function VendorProfile() {
//     return (
//         <>
//             <div className="min-h-screen flex bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
//                 <VendorSideBar />
//                 <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex-1">
//                     <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center drop-shadow">Vendor Profile</h2>
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <div className="flex items-center space-x-4 mb-6">
//                             <img
//                                 src="https://via.placeholder.com/100"
//                                 alt="Vendor Avatar"
//                                 className="w-24 h-24 rounded-full object-cover"
//                             />
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-800">Vendor Name</h3>
//                                 <p className="text-sm text-gray-500">
//                                     Vendor description goes here. This can include business details, location, and contact information.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="bg-gray-50 p-4 rounded-lg shadow">
//                                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h4>
//                                 <p className="text-sm text-gray-600">Email:
//                                     <span className="font-medium text-gray-800"></span>
//                                 </p>
//                                 <p className="text-sm text-gray-600">Phone:
//                                     <span className="font-medium text-gray-800"></span>
//                                 </p>
//                                 <p className="text-sm text-gray-600">Address:
//                                     <span className="font-medium text-gray-800"></span>
//                                 </p>
//                             </div>
//                             <div className="mt-6">
//                                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Actions</h4>
//                                 <div className="flex space-x-4">
//                                     <Link to="/vendor-settings" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                                         Edit Profile
//                                     </Link>
//                                     <Link to="/vendor-advert-list" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//                                         View Adverts
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="mt-8">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h3>
//                             <ul className="space-y-4">
//                                 <li className="bg-white p-4 rounded-lg shadow">
//                                     <p className="text-sm text-gray-600">Posted a new advert for "Product Name" on 2023-10-01.</p>
//                                 </li>
//                                 <li className="bg-white p-4 rounded-lg shadow">
//                                     <p className="text-sm text-gray-600">Updated profile information on 2023-09-28.</p>
//                                 </li>
//                                 <li className="bg-white p-4 rounded-lg shadow">
//                                     <p className="text-sm text-gray-600">Received a new message from a customer on 2023-09-25.</p>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
