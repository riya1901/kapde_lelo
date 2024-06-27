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
 
    <ul className="menu">
      <li className="menu__item"><Link to="/" className="menu__link" >Home</Link> </li>
      <li className="menu__item"><Link to="/Mens" className="menu__link" >Mens wear</Link> </li>
      <li className="menu__item"><Link to="/womens" className="menu__link" >Womens wear</Link> </li>
      <li className="menu__item"><Link to="/Jewelery" className="menu__link" >Jewelery</Link> </li>
      <li className="menu__item"><a className="menu__link" href="https://github.com/Adi-3000" target='blank'>Contact me</a> </li>

    </ul>
    <p>&copy;2024 Aaditya raj | All Rights Reserved</p>
  </footer>
  
  
    </div>
  )
}

export default Footer