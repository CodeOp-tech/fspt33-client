import { useState } from "react";

const Form = ({ addTask }) => {
  // create state to hold form input
  let [input, setInput] = useState("");

  //   handle changes: update form input data
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // on form submit:
  const handleSubmit = (e) => {
    e.preventDefault();
    // add task to database
    addTask(input);
    // reset form
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">New Task</label>
        <input onChange={(e) => handleChange(e)} value={input} name="input" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
