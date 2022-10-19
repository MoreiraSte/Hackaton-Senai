import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
       
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DialUp
              
            </Link>
          </div>
          <small class='website-rights'>DialUp © 2022</small>
          </div>
      </section>
    </div>
  );
}

export default Footer;
