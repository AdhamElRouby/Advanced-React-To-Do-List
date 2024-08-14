const EditItem = ({ text, setText, saveEdit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveEdit();
      }}
    >
      <input
        type="text"
        id="edit-item"
        autoFocus
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={saveEdit}
      />
    </form>
  );
};

export default EditItem;
