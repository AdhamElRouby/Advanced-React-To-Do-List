import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );
  const [newItem, setNewItem] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const itemsLength = items.length;

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const displayedItems = items.filter((item) =>
      item.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(displayedItems);
  }, [items, search]);

  return (
    <DataContext.Provider
      value={{
        items, setItems, itemsLength,
        newItem, setNewItem, 
        search, setSearch, searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
