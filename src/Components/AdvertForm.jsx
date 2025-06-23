import VendorSideBar from "./VendorSideBar";


export default function AdvertForm() {
    return (
        <>
            <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans">
                <VendorSideBar />
                <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                    {/* Main Form Container */}
                    <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
                        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300">
                            <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center drop-shadow">Advert Form</h1>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Enter advert title"
                                        className="transition-all duration-200 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="contact">
                                        Contact Information
                                    </label>
                                    <input
                                        id="contact" required
                                        name="contact"
                                        type="text"
                                        placeholder="Phone number"
                                        className="transition-all duration-200 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        name="location"
                                        placeholder="Location"
                                        className="transition-all duration-200 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold text-gray-700">Category</label>
                                    <select
                                        name="category"
                                        required
                                        className="transition-all duration-200 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Tech & Programming">Tech & Programming</option>
                                        <option value="Artisans">Artisans</option>
                                        <option value="Education & Training">Education & Training</option>
                                        <option value="Health & Wellness">Health & Wellness</option>
                                        <option value="Food & Beverages">Food & Beverages</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Enter advert description"
                                        className="transition-all duration-200 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
                                        Price (GHS)
                                    </label>
                                    <input
                                        id="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="Enter price"
                                        className="transition-all duration-200 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="image">
                                        Upload Image
                                    </label>
                                    <input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            required
                                            className="form-checkbox h-5 w-5 text-blue-600 transition-all duration-200"
                                        />
                                        <span className="ml-2 text-gray-700">
                                            I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
                                        </span>
                                    </label>
                                </div>
                                <div className="flex gap-5 items-center pt-2">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Submit Advert
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-white-300 hover:bg-red-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                                    // onClick={() => window.location.reload()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// This component renders a form for submitting advertisements with fields for title, contact information, category, description, price, and image upload. It also includes a checkbox for agreeing to terms and conditions and buttons for submitting or canceling the form.
// The form is styled using Tailwind CSS classes for a clean and modern look. The component is designed to be responsive and user-friendly, ensuring that users can easily fill out the form on various devices. The use of semantic HTML elements like `<label>`, `<input>`, and `<textarea>` enhances accessibility and usability.
// The form includes validation attributes like `required` to ensure that users fill out necessary fields before submission. The buttons are styled to provide visual feedback on hover, enhancing the user experience. The cancel button is designed to allow users to exit the form without submitting any data, providing flexibility in user interaction.
// The component is self-contained and can be easily integrated into a larger application, making it a versatile solution for creating advertisement forms. It can be further extended with additional features like form validation, error handling, and integration with backend services for data submission and retrieval.
// The component is designed to be reusable and can be adapted for different types of advertisements by modifying the categories and fields as needed. It serves as a foundational element for building a comprehensive advertisement management system, allowing users to create and manage their advertisements effectively.
// The component can be further enhanced with features like image preview, form validation messages, and integration with a backend API for submitting the form data. This would allow for a more dynamic and interactive user experience, enabling users to see their uploaded images before submission and receive feedback on any validation errors in real-time.
// The form can also be styled further to match the overall design of the application, ensuring consistency across different pages and components. This can include customizing the colors, fonts, and layout to align with the branding of the application or website where the form will be used.
// Additionally, the form can be made more accessible by ensuring that all interactive elements are keyboard navigable and that appropriate ARIA roles and attributes are used where necessary. This will help users with disabilities to interact with the form effectively, improving the overall usability of the component.