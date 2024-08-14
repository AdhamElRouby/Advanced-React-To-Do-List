import './Header.css';
import { FaClipboardList } from "react-icons/fa";

const Header = ({ title = 'Title' }) => {
  return (
    <header>
      <h1>{title}</h1>
      <FaClipboardList className='header-icon'/>
    </header>
  );
};

export default Header;
