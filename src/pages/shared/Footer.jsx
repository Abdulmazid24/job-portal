import Lottie from 'lottie-react';
import jobLottieAnimation from '../../assets/lottie/job-portal.json';
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Lottie
              className="w-20"
              animationData={jobLottieAnimation}
            ></Lottie>
            <h1 className="text-2xl font-bold mb-2">JobPortal</h1>
            <p className="text-sm">
              Your gateway to endless career opportunities.<br></br>Explore,
              apply, and grow!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:underline">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="/employers" className="hover:underline">
                  For Employers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Email: support@jobportal.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Career St, JobCity</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-green-500 pt-4 text-sm">
          <p>
            © {new Date().getFullYear()} JobPortal. All Rights Reserved. | Built
            with ❤️ by YourName
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
