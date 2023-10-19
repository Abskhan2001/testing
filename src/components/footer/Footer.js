import React from 'react';
import './footer.css';
import WhatsApp from '../whatsapp/WhatsApp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footerLogo'>
          <h3>Mumtaz Movers - Your Relocation Experts in the UAE</h3>
          <p>
            Mumtaz Movers is a top-rated moving and packing company in the UAE. We offer local and international moving services, packing & unpacking, and more. Contact us for a smooth relocation experience.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@mumtazmovers.com">info@mumtazmovers.com</a></p>
          <p>Phone: <a href="tel:+971524484031">0524484031</a></p>
          <p>Address: UNITED ARAB EMIRATES</p>
        </div>
        <div className="footer-social">
          <WhatsApp />
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Mumtaz Movers. All Rights Reserved.</p>
      </div>

      {/* Structured Data (Schema.org) for the Organization */}
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Mumtaz Movers",
          "description": "Top-rated moving and packing company in the UAE.",
          "url": "https://www.mumtazmovers.com",
          "email": "info@mumtazmovers.com",
          "telephone": "+971524484031",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "12345",
            "addressCountry": "UNITED ARAB EMIRATES"
          }
        }
      `}</script>

      {/* Meta Tags for SEO */}
      <meta name="description" content="Mumtaz Movers - Your trusted moving and packing company in the UAE. We offer local and international moving services. Contact us for a smooth relocation experience." />
      <meta name="keywords" content="Mumtaz Movers, moving and packing, relocation, UAE, top-rated movers" />
    </footer>
  );
}

export default Footer;
