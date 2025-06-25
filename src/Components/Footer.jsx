import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#364148] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <h4 className="font-bold mb-4">{t('About')}</h4>
          <ul>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Our Story')}</Link></li>
            
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Terms & Conditions')}</Link></li>
          </ul>
        </div>

               {/* Support Section */}
        <div>
          <h4 className="font-bold mb-4">{t('Support')}</h4>
          <ul>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Help & Support')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('FAQ DeesaxConnect')}</Link></li>
            
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Privacy Policy')}</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="font-bold mb-4">{t('Products')}</h4>
          <ul>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Fashion')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Tech Gadgets')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Catering')}</Link></li>
          </ul>
        </div>

 {/* Services Section */}
        <div>
          <h4 className="font-bold mb-4">{t('Address')}</h4>
          <ul>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('DeexasConnect.')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('B.J Da Rocha loop,20.')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Accra,Ghana')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('+233 545 725 331')}</Link></li>
            <li className="mb-2"><Link to="/notfound" className="hover:underline">{t('Connect with us!')}</Link></li>
          </ul>
        </div>


        {/* Follow Us Section */}
        <div>
          <h4 className="font-bold mb-4">{t('Follow Us')}</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/esther-manor" className="text-blue-400 hover:text-white"><FaFacebookF /></a>
            <a href="https://www.instagram.com/i_am_duchess6?igsh=a3U5ZHRrM2s1ZnNx&utm_source=qr" className="text-pink-400 hover:text-white"><FaInstagram /></a>
            <a href="https://x.com/gitoataop?s=21" className="text-blue-300 hover:text-white"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/sandra-allotey-1266942a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-500 hover:text-white"><FaLinkedinIn /></a>
            <a href="https://wa.me/0548311401" className="text-green-500 hover:text-white"><FaWhatsapp /></a>
          </div>

          <h4 className="font-bold  px-1 mt-10">{t('Subscribe to our email')}</h4>
          <div className="flex">
            <input
              type="email"
              placeholder={t('Enter your email')}
              className='border px-3 py-2 rounded-l text-white outline-none'
            />
            <button className='bg-[#38cca0] text-black px-2 py-2  rounded-r hover:bg-blue-600'>
              {t('Send')}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} DeesaxConnect. {t('All rights reserved')}.
      </div>
    </footer>
  );
}