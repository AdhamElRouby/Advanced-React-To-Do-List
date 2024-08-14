import { useRef, useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { DataContext } from '../context/DataContext';
import './AddItem.css';

const AddItem = () => {
  const { newItem, setNewItem, items, setItems } = useContext(DataContext);
  const inputRef = useRef(null);

  const notifySuccess = () => {
    toast.success('1 Item has been addded', {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const addItem = (item) => {
    const id = items.length
      ? String(
          Number(
            items.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id
          ) + 1
        )
      : '1';
    const myNewItem = { id: id, checked: false, item: item };
    const newItems = [...items, myNewItem];
    setItems(newItems);
    notifySuccess();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add Item..."
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="add-btn"
        type="submit"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
