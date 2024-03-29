import React from 'react';
import './Footer.css';

function Footer() {
    let dateObj = new Date();
  return (
    <footer className="Footer">
        {/* stretch challenge - JS object for date */}
        <p>Laurel McLean - Copyright {dateObj.getFullYear()}</p>
    </footer>
  )
};

export default Footer;