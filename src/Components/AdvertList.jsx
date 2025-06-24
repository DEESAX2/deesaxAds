import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";
import { Link } from "react-router";


export default function AdvertList() {

  const advertData = [
    {
      id: 'AD001',
      title: 'Vintage Workbench',
      description: 'A sturdy and classic vintage workbench, perfect for any craftsman.',
      price: '₵450.00',
      contact: 'john.doe@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD002',
      title: 'Antique Tool Chest',
      description: 'Hand-carved antique tool chest with multiple compartments.',
      price: '₵280.00',
      contact: 'jane.smith@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD003',
      title: 'Retro Drill Press',
      description: 'Fully functional retro drill press, great for restoration projects.',
      price: '₵600.00',
      contact: 'mark.jones@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD004',
      title: 'Classic Hand Saw',
      description: 'High-quality carbon steel hand saw, sharp and ready to use.',
      price: '₵75.00',
      contact: 'lisa.williams@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD005',
      title: 'Leather Apron',
      description: 'Durable leather apron, ideal for woodworking and metalworking.',
      price: '₵95.00',
      contact: 'david.brown@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD006',
      title: 'Vintage Lathe',
      description: 'Well-maintained vintage wood turning lathe.',
      price: '₵1200.00',
      contact: 'sarah.davis@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD007',
      title: 'Old School Calipers',
      description: 'Precision brass calipers, perfect for detailed measurements.',
      price: '₵50.00',
      contact: 'chris.miller@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD008',
      title: 'Workbench Vise',
      description: 'Heavy-duty cast iron workbench vise, excellent grip.',
      price: '₵150.00',
      contact: 'emily.wilson@example.com',
      imageUrl: craftsmanVintagelogo,
    },
    {
      id: 'AD009',
      title: 'Tool Rack',
      description: 'Wall-mounted wooden tool rack, organizes your workshop efficiently.',
      price: '₵40.00',
      contact: 'alex.taylor@example.com',
      imageUrl: craftsmanVintagelogo,
    },
  ];
















  
  return (
    <div>
      <Navbar />
      <div className=''>

        <div>
          <h1 className='text-3xl text-shadow-orange-950 font-bold text-center m-10'>Connect with our dedicated Professionals</h1>
          <div className='flex flex-row justify-center items-center'>
            <Link to="/" >
              <button className='bg-amber-800 px-5 py-2 border-2 rounded m-10'>Home</button>
            </Link>
          </div>

        </div>
        {/* Grid Container for Advert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {advertData.map((advert) => (
            <div
              key={advert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={advert.imageUrl}
                alt={advert.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{advert.title}</h3>
                <p className="text-sm text-gray-600 mb-1">ID: {advert.id}</p>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{advert.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-bold text-green-600">{advert.price}</p>
                  <a
                    href={`mailto:${advert.contact}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Contact Seller
                  </a>
                </div>
                <p className="text-xs text-gray-500">Contact: {advert.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-20 m-20 bg-amber-100 p-10 '>
                <h1 className='text-3xl font-bold text-amber-800'>EXPERTISE</h1>
                <p>With over ten years experience, your needs are well understood and taken care of. Our mission is to deliver services that are tailor-made for individuals. Matching each user to a vendor that understands their needs and can deliver.</p>
                  </div>
      <Footer />
    </div>
  );
}