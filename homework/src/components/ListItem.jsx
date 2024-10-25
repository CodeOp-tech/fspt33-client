import axios from "axios";
import DeleteButton from "./DeleteButton";
import "./ListItem.css";

const ListItem = ({ task, setTasks }) => {
  const updateTask = async (id) => {
    try {
      // update task in db
      const response = await axios.put(
        `http://localhost:4000/api/todos/${id}`,
        // opposite of current state (true/false)
        { isComplete: !task.isComplete },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // update task in state
      setTasks((state) =>
        state.map((task) =>
          task.id === id ? { ...task, isComplete: !task.isComplete } : task
        )
      );
    } catch (error) {
      // upon failure, show error message
      console.error(error);
    }
  };
  return (
    <div className={`list-item ${task.isComplete ? "completed" : null}`}>
      <input
        type="checkbox"
        name="item"
        checked={task.isComplete}
        onChange={() => updateTask(task.id)}
      />
      <label htmlFor="item">{task.title}</label>
      <DeleteButton id={task.id} setTasks={setTasks} />
    </div>
  );
};

export default ListItem;
