import ListItems from './ListItems/ListItems';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Content = () => {
  const { searchResults:items } = useContext(DataContext);

  return items.length ? <ListItems /> : <p>Your list is empty.</p>;
};

export default Content;
