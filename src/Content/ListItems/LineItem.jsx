import EditItem from './EditItem';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import useHandleLineItem from '../../hooks/useHandleLineItem';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { useMotionValue, Reorder } from 'framer-motion';

const LineItem = ({ item }) => {
  const { search } = useContext(DataContext);
  const { handleChecked, handleDelete, handleBlur, handleDoubleClick } =
    useHandleLineItem();
  const y = useMotionValue(0);
  const [text, setText] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const editItem = () => {
    setIsInputVisible(true);
    handleDoubleClick(item.id);
  };

  const saveEdit = () => {
    setIsInputVisible(false);
    handleBlur(item.id, text);
  };

  useEffect(() => {
    if (isInputVisible) setText(item.item);
  }, [isInputVisible, item.item]);

  const content = (
    <>
      <input
        type="checkbox"
        checked={item.checked}
        id={item.id}
        name="groceries"
        onChange={() => {
          handleChecked(item.id);
        }}
      />

      {!isInputVisible ? (
        <>
          <label
            className={item.checked ? 'checked' : undefined}
            onDoubleClick={editItem}
          >
            <p style={{ cursor: 'text' }}>{item.item}</p>
          </label>
          <FaEdit
            role="button"
            tabIndex="0"
            onClick={editItem}
            className="edit-btn"
          />
        </>
      ) : (
        <>
          <EditItem
            item={item}
            text={text}
            setText={setText}
            saveEdit={saveEdit}
          />
          <FaCheck
            role="button"
            tabIndex="0"
            onClick={saveEdit}
            className="check-btn"
          />
        </>
      )}

      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </>
  );

  return !search ? (
    <Reorder.Item value={item} id={item.id} className="item" style={y}>
      {content}
    </Reorder.Item>
  ) : (
    <li className="item" style={{ cursor: 'auto' }}>
      {content}
    </li>
  );
};

export default LineItem;
