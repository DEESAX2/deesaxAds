import { useState } from "react";
import { useNavigate } from "react-router";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorSideBar from "./VendorSideBar";
import { apiClient } from "../api/client";
import SubmitButton from "./SubmitButton";

export default function AdvertForm() {
    const navigate = useNavigate();

    const postAd = async (data) => {
        try {
            const response = await apiClient.post('/add', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }


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

                        <form action={postAd} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Enter advert title"
                                    required
                                    className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">
                                    Contact Information
                                </label>
                                <input
                                    id="contact"
                                    name="contact"
                                    type="text"
                                    required
                                    placeholder="Phone number"
                                    className="w-full border rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    placeholder="Location"
                                    className="w-full border rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 bg-white"
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
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    placeholder="Enter advert description"
                                    className="w-full border rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="price">
                                    Price (GHS)
                                </label>
                                <input
                                    id="price"
                                    name="price"
                                    type="text" // Changed to text to match sample
                                    required
                                    placeholder="Enter price"
                                    className="w-full border rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300 text-gray-700"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1" htmlFor="image">
                                    Upload Image
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="w-full p-3 border rounded-lg file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition"
                                />
                            </div>

                           

                            <div className="flex gap-4 pt-4">
                                <SubmitButton title={'Submit Advert'} className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200" />
                                <button
                                    type="button"
                                    onClick={() => navigate("/vendor-advert-list")}
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