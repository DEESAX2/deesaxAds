import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">About</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Advert Posting</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Product Listings</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Customer Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Products</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Fashion</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Tech Gadgets</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Food Items</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://www.instagram.com/i_am_duchess6?igsh=a3U5ZHRrM2s1ZnNx&utm_source=qr" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/sandra-allotey-1266942a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} DeesaxConnect. All rights reserved.
      </div>
    </footer>
  );
}