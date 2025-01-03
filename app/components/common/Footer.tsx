import React from "react";
import "./Footer.css"; // Importing the CSS file
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing the required icons
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
 

  // WhatsApp icon fixed at the bottom-right
  const phoneNumber = "8523811173"; // Your phone number (replace with your actual phone number)
  const message = encodeURIComponent("Hello, I have a question!"); // Predefined text message
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-left">
      {/* Logo Section */}
      <div className="footer-logo">
        <div className="logo-wrapper">
          <Image
            src="/finance logo.png" // Make sure this is the correct path
            alt="Company Logo"
            width={400}
            height={400}
            className="footer-logo-img"
          />
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info mt-14">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:eshatechnologyprvtltd@gmail.com">
            mehaafinserv@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919848197223">9848197223</a>
        </p>
      </div>

      {/* Follow Us Section */}
      <div className="social-media-section">
        <h3>Follow Us</h3>
        <ul className="social-media">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>

          {/* Map Section with Address */}
          <div className="map-section">
            <h3 className="font-semibold">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7612.765268005782!2d78.46391209035956!3d17.44139088381972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a5d40aa43f%3A0x759891c5155b2eac!2sPrakash%20Nagar%2C%20Begumpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1734504182691!5m2!1sen!2sin"
              width="100%" /* Make the map responsive */
              height="200" /* Adjust height of the map */
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li className="hover:cursor-pointer">
                <Link href="/loans/home-loan">Home loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/vehicle-loan">Vehicle loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/business-loan">Business loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/mortgage-loan">Mortgage loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/machinery-loan">Machinery loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/personal-loan">Personal loan</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="./loans/education-loan">Education loan</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Fixed WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed-whatsapp-icon"
      >
        <div className="whatsapp-icon-bg">
          <Image src="/whatsapp-icon-logo-svgrepo-com.svg" alt="WhatsApp Icon"
           width={60}
                height={60}/>
        </div>
      </a>
    </>
  );
};

export default Footer;
