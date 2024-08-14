import LineItem from './LineItem';
import { Reorder } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './ListItems.css';

const ListItems = () => {
  const { search, searchResults:items, setItems } = useContext(DataContext);
  const displayedItems = items.map((item) => (
    <LineItem key={item.id} item={item} />
  ));

  return !search ? (
    <Reorder.Group axis="y" values={items} onReorder={setItems} layoutScroll>
      {displayedItems}
    </Reorder.Group>
  ) : (
    <ul>{displayedItems}</ul>
  );
};

export default ListItems;
