import React from "react";
import { Link } from "react-router";
import { useState } from "react";


export default function AdvertCard({ id, title, description, imageUrl, contact, price }) {
    return (
        <Link to={`/advert/${id}`} className="block">
            <div className="
      border border-gray-200 rounded-lg shadow-lg
      overflow-hidden w-full sm:w-80 md:w-96 lg:w-80
      mx-auto my-4 bg-white
      flex flex-col
      transform transition-transform duration-300 hover:scale-105">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                        {description}
                    </p>


                    <div className="px-4 pb-4">
                        <p className="text-gray-800 text-sm mb-1">
                            <strong className="font-medium">Contact:</strong> {contact}
                        </p>
                        <p className="text-gray-600 text-lg font-bold">
                            ₵{price}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}



