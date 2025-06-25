import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";
import { Link } from "react-router";
import { apiFetcher } from '../api/client';
import { BarLoader } from 'react-spinners';
import AdvertCard from '../Components/AdvertCard';
import useSWR from 'swr';

export default function AdvertList() {
  const { data, error, isLoading } = useSWR('/adverts', apiFetcher);

  if (isLoading) return <p>Loading adverts...</p>;
  if (error) return <p className="text-3xl text-center text-red-400 font-bold">Oh Oh! Failed to load adverts.</p>;


  const today = new Date();
  const validAdverts = data.filter(ad => new Date(ad.endDate) >= today);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <Navbar />
      {validAdverts.map((ad) => (
        <AdvertCard
          key={ad._id}
          id={ad._id}
          title={ad.title}
          description={ad.description}
          imageUrl={ad.image}
          contact={ad.contact}
          price={ad.price}
        />
      ))}
      <Footer />
    </div>
  );
}

