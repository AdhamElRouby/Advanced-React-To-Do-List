import './SearchItem.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SearchItem = () => {
  const { seacrh, setSearch } = useContext(DataContext);

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={seacrh}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
