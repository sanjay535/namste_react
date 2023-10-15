import { Link } from 'react-router-dom';
import logo from '../../assets/food_logo.jpg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' height={100} />
      <div>
        <input placeholder='Search restourents..' type='text' />
        <button>Search</button>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
