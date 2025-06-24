import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorSideBar from "../Components/VendorSideBar";

export default function EditAdvert() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simulated update logic
    try {
      setFormSubmitted(true);
      toast.success("Advert updated successfully!");
      // Optional: redirect after delay
      // navigate('/vendor/adverts');
    } catch (error) {
      toast.error("Failed to update advert. Try again.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
        <VendorSideBar />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
              <h1 className="text-4xl font-extrabold mb-6 text-indigo-300 text-center drop-shadow flex items-center justify-center gap-3">
                Update Advert
              </h1>

              {/* ✅ Optional inline success message */}
              {formSubmitted && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-6 text-center font-medium">
                  Advert updated successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* All your input fields remain the same */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">Title</label>
                  <input id="title" type="text" placeholder="Enter advert title" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">Contact Information</label>
                  <input id="contact" required name="contact" type="text" placeholder="Phone number" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
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

                <div className="flex gap-4 pt-4">
                  <button type="submit" className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200">
                    Update Advert
                  </button>
                  <button type="button" className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200">
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
