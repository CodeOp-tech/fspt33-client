import axios from "axios";

const DeleteButton = ({ id, setTasks }) => {
  const handleDelete = async (id) => {
    try {
      // delete from database
      const response = await axios.delete(
        `http://localhost:4000/api/todos/${id}`
      );
      if (response.status === 200) {
        setTasks((state) => state.filter((t) => t.id !== id));
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <span className="delete-button">
      <button onClick={() => handleDelete(id)}>X</button>
    </span>
  );
};

export default DeleteButton;
