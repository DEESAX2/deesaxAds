import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import VendorSideBar from "../Components/VendorSideBar";
import { apiClient } from "../api/client";

export default function EditAdvert() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    contact: "",
    location: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Filter out empty fields to send only updated values
    const dataToSend = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    try {
      const response = await apiClient.patch(`/update/${id}`, dataToSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => navigate(-1), 1000); // Navigate back after 1s delay
      }
    } catch (error) {
      setError("Failed to update advert. Please try again.");
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      contact: "",
      location: "",
      category: "",
      description: "",
      price: "",
      image: "",
    });
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <VendorSideBar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Update Advert
            </h1>

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Advert updated successfully!
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter advert title"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="contact">
                  Contact Information
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter advert description"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="price">
                  Price (GHS)
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="image">
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition"
                >
                  Update Advert
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded hover:bg-red-500 hover:text-white transition"
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




// import VendorSideBar from "../Components/VendorSideBar";
// import { apiClient } from "../api/client";
// import { useSearchParams } from "react-router"





// export default function EditAdvert() {

//   const [searchParams] = useSearchParams();
//   const id = searchParams.get('id');


//   const patchEdit = async (data) => {

//     //Post data to api
//     try {
//       const response = await apiClient.patch(`/update/${id}`, data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem('token')}`

//         },
//       });
//       console.log(response);
//       navigate(-1); // Navigate back to the previous page
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   return (
//     <>
//       <div className="flex min-h-screen bg-gradient-to-br from-[var(--color-nav)] via-[var(--color-special)] to-[var(--color-light)] font-sans">
//         <VendorSideBar />
//         <div className="flex-1 flex items-center justify-center p-6">
//           <div className="w-full max-w-2xl mx-auto">
//             <div className="bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
//               <h1 className="text-4xl font-extrabold mb-6 text-indigo-300 text-center drop-shadow flex items-center justify-center gap-3">
//                 Update Advert
//               </h1>

//               <form action={patchEdit} className="space-y-6">
//                 {/* All your input fields remain the same */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">Title</label>
//                   <input id="title" type="text" placeholder="Enter advert title" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">Contact Information</label>
//                   <input id="contact" required name="contact" type="text" placeholder="Phone number" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
//                 </div>

//                 <div>
//                   <input type="text" name="location" placeholder="Location" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1">Category</label>
//                   <select name="category" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 bg-white">
//                     <option value="">Select a category</option>
//                     <option value="Tech & Programming">Tech & Programming</option>
//                     <option value="Artisans">Artisans</option>
//                     <option value="Education & Training">Education & Training</option>
//                     <option value="Health & Wellness">Health & Wellness</option>
//                     <option value="Food & Beverages">Food & Beverages</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">Description</label>
//                   <textarea id="description" placeholder="Enter advert description" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1" htmlFor="price">Price (GHS)</label>
//                   <input id="price" type="number" min="0" step="0.01" placeholder="Enter price" className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700" />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-1" htmlFor="image">Upload Image</label>
//                   <input id="image" type="file" accept="image/*" className="w-full p-3 border rounded-lg file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition" />
//                 </div>

//                 <div className="flex gap-4 pt-4">
//                   <button type="submit" className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200">
//                     Update Advert
//                   </button>
//                   <button type="button" className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200">
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
