import { useState } from "react";
import { useNavigate } from "react-router";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorSideBar from "./VendorSideBar";

export default function AdvertForm() {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Simulate successful submission
            toast.success("Advert posted successfully!");

            setTimeout(() => {
                navigate("/vendor-advert-list"); // Redirect after success
            }, 2500);
        } catch (error) {
            toast.error("Failed to post advert. Please try again.");
            setSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
            <VendorSideBar />
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
                        <h1 className="text-4xl font-extrabold mb-6 text-indigo-300 text-center drop-shadow flex items-center justify-center gap-3">
                            <HiOutlinePlusCircle className="text-5xl text-indigo-300 drop-shadow" />
                            Create New Advert
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">Title</label>
                                <input id="title" type="text" placeholder="Enter advert title" required className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">Contact Information</label>
                                <input id="contact" name="contact" type="text" required placeholder="Phone number" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                            </div>

                            <div>
                                <input type="text" name="location" placeholder="Location" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Category</label>
                                <select name="category" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 bg-white">
                                    <option value="">Select a category</option>
                                    <option value="Tech & Programming">Tech & Programming</option>
                                    <option value="Artisans">Artisans</option>
                                    <option value="Education & Training">Education & Training</option>
                                    <option value="Health & Wellness">Health & Wellness</option>
                                    <option value="Food & Beverages">Food & Beverages</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">Description</label>
                                <textarea id="description" placeholder="Enter advert description" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="price">Price (GHS)</label>
                                <input id="price" type="number" min="0" step="0.01" placeholder="Enter price" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="image">Upload Image</label>
                                <input id="image" type="file" accept="image/*" className="w-full p-3 border rounded-lg file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition" />
                            </div>

                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="terms" required className="form-checkbox h-5 w-5 text-indigo-600" />
                                    <span className="ml-2 text-gray-700">
                                        I agree to the <a href="#" className="text-indigo-600 hover:underline">terms and conditions</a>
                                    </span>
                                </label>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
                                >
                                    {submitting ? "Posting..." : "Submit Advert"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate("/vendor/adverts")}
                                    className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


















// import VendorSideBar from "./VendorSideBar";
// import { HiOutlinePlusCircle } from "react-icons/hi";


// export default function AdvertForm() {
//     return (
//         <div className="flex min-h-screen bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
//             <VendorSideBar />
//             <div className="flex-1 flex items-center justify-center p-6">
//                 <div className="w-full max-w-2xl mx-auto">
//                     <div className="bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
//                         <h1 className="text-4xl font-extrabold mb-6 text-indigo-300 text-center drop-shadow flex items-center justify-center gap-3">
//                             <HiOutlinePlusCircle className="text-5xl text-indigo-300 drop-shadow" />
//                             Create New Advert
//                         </h1>
//                         <form className="space-y-6">
//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">
//                                     Title
//                                 </label>
//                                 <input
//                                     id="title"
//                                     type="text"
//                                     placeholder="Enter advert title"
//                                     className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">
//                                     Contact Information
//                                 </label>
//                                 <input
//                                     id="contact"
//                                     required
//                                     name="contact"
//                                     type="text"
//                                     placeholder="Phone number"
//                                     className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="text"
//                                     name="location"
//                                     placeholder="Location"
//                                     className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1">Category</label>
//                                 <select
//                                     name="category"
//                                     required
//                                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 bg-white"
//                                 >
//                                     <option value="">Select a category</option>
//                                     <option value="Tech & Programming">Tech & Programming</option>
//                                     <option value="Artisans">Artisans</option>
//                                     <option value="Education & Training">Education & Training</option>
//                                     <option value="Health & Wellness">Health & Wellness</option>
//                                     <option value="Food & Beverages">Food & Beverages</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">
//                                     Description
//                                 </label>
//                                 <textarea
//                                     id="description"
//                                     placeholder="Enter advert description"
//                                     className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
//                                 ></textarea>
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1" htmlFor="price">
//                                     Price (GHS)
//                                 </label>
//                                 <input
//                                     id="price"
//                                     type="number"
//                                     min="0"
//                                     step="0.01"
//                                     placeholder="Enter price"
//                                     className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-semibold mb-1" htmlFor="image">
//                                     Upload Image
//                                 </label>
//                                 <input
//                                     id="image"
//                                     type="file"
//                                     accept="image/*"
//                                     className="w-full p-3 border rounded-lg file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="terms"
//                                         required
//                                         className="form-checkbox h-5 w-5 text-indigo-600"
//                                     />
//                                     <span className="ml-2 text-gray-700">
//                                         I agree to the{' '}
//                                         <a href="#" className="text-indigo-600 hover:underline">
//                                             terms and conditions
//                                         </a>
//                                     </span>
//                                 </label>
//                             </div>

//                             <div className="flex gap-4 pt-4">
//                                 <button
//                                     type="submit"
//                                     className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
//                                 >
//                                     Submit Advert
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// This component renders a form for submitting advertisements with fields for title, contact information, category, description, price, and image upload. It also includes a checkbox for agreeing to terms and conditions and buttons for submitting or canceling the form.
// The form is styled using Tailwind CSS classes for a clean and modern look. The component is designed to be responsive and user-friendly, ensuring that users can easily fill out the form on various devices. The use of semantic HTML elements like `<label>`, `<input>`, and `<textarea>` enhances accessibility and usability.
// The form includes validation attributes like `required` to ensure that users fill out necessary fields before submission. The buttons are styled to provide visual feedback on hover, enhancing the user experience. The cancel button is designed to allow users to exit the form without submitting any data, providing flexibility in user interaction.
// The component is self-contained and can be easily integrated into a larger application, making it a versatile solution for creating advertisement forms. It can be further extended with additional features like form validation, error handling, and integration with backend services for data submission and retrieval.
// The component is designed to be reusable and can be adapted for different types of advertisements by modifying the categories and fields as needed. It serves as a foundational element for building a comprehensive advertisement management system, allowing users to create and manage their advertisements effectively.
// The component can be further enhanced with features like image preview, form validation messages, and integration with a backend API for submitting the form data. This would allow for a more dynamic and interactive user experience, enabling users to see their uploaded images before submission and receive feedback on any validation errors in real-time.
// The form can also be styled further to match the overall design of the application, ensuring consistency across different pages and components. This can include customizing the colors, fonts, and layout to align with the branding of the application or website where the form will be used.
// Additionally, the form can be made more accessible by ensuring that all interactive elements are keyboard navigable and that appropriate ARIA roles and attributes are used where necessary. This will help users with disabilities to interact with the form effectively, improving the overall usability of the component.