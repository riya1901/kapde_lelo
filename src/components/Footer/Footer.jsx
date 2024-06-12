import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css';
function Footer() {
  return (
    <div>
        <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><Link to="/" className="menu__link" >Home</Link> </li>
      <li className="menu__item"><Link to="/" className="menu__link" >About</Link> </li>
      <li className="menu__item"><Link to="/" className="menu__link" >Services</Link> </li>
      <li className="menu__item"><Link to="/" className="menu__link" >Team</Link> </li>
      <li className="menu__item"><Link className="menu__link" href="#">Contact</Link> </li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  
    </div>
  )
}

export default Footer