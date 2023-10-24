import { Link } from 'react-router-dom';
import logo from '../../assets/food_logo.jpg';

const Header = () => {
  return (
    <header className='flex items-center shadow-lg sticky top-0 bg-white'>
      <img src={logo} alt='logo' className='w-36 h-24'/>
      <div className='flex-1 text-center'>
        <input className='p-2 mr-2 w-72 outline-none border-2 rounded-md' placeholder='Search restourents..' type='text' />
        <button className='px-3 py-2 bg-green-100 rounded-md'>Search</button>
      </div>
      <nav>
        <ul className='flex'>
          <li className='px-3'><Link to="/">Home</Link></li>
          <li className='px-3'><Link to="/about">About Us</Link></li>
          <li className='px-3'><Link to="/contact">Contact Us</Link></li>
          <li className='px-3'><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
