import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import './Footer.css';

const Footer = () => {
  const { itemsLength: length } = useContext(DataContext);

  return (
    <footer>
      <p>
        {length} List Item{length != 1 && 's'}
      </p>
    </footer>
  );
};

export default Footer;
