import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import axios from "axios";
import "./App.css";

export default function App() {
  let [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // communicate with db
        let response = await axios.get("http://localhost:4000/api/todos");
        console.log(response);
        // update front end state to reflect db info
        setTasks(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addTask = async (input) => {
    try {
      // communicate with db: add task
      // axios.method(url, data(opt), options(say type of data))
      let response = await axios.post(
        "http://localhost:4000/api/todos",
        { title: input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // get the new task object from db response
      const newTask = response.data;
      // add it to your state
      setTasks((state) => [...state, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Banner />
      <Form addTask={addTask} />
      <div className="list-container">
        {tasks.map((task) => {
          return <ListItem key={task.id} task={task} setTasks={setTasks} />;
        })}
      </div>
    </div>
  );
}
