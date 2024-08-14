import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';

const useHandleLineItem = () => {
  const { items, setItems } = useContext(DataContext);

  const notifyDelete = () => {
    toast.error('1 Item has been deleted', {
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

  const handleChecked = async (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };

  const handleDelete = async (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    notifyDelete();
  };

  const handleDoubleClick = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, edit: true } : item
    );
    setItems(newItems);
  };

  const handleBlur = async (id, text) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, item: !text ? item.item : text } : item
    );
    setItems(newItems);
  };

  return { handleChecked, handleDelete, handleDoubleClick, handleBlur };
};

export default useHandleLineItem;
