"use client";
import { FC, useState } from "react";
import { ITask } from "@/interfaces/interfaces";
import TodoList from "@/components/TodoList";

const Home: FC = () => {
  const [task, setTask] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [showTodo, setShowTodo] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let newTask :ITask = { task: task, duration: duration };
    setTodoList([...todoList, newTask]);

    setShowTodo(true);
    
    console.log(task, duration);
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.id === "task") {
      setTask(event.target.value);
    } else if (event.target.id === "duration") {
      setDuration(Number(event.target.value));
    }
  };
  return (
    <div className="flex-col items-center text-lg p-8 mx-8 ">
      <div className="text-center mb-12">
        <form onSubmit={handleSubmit}>
          <label htmlFor="task">Enter Task : </label>
          <input
            type="text"
            id="task"
            placeholder="task"
            required
            onChange={handleChange}
            value={task}
          />
          <label htmlFor="duration">Enter duration : </label>
          <input
            type="number"
            id="duration"
            placeholder="duration"
            required
            onChange={handleChange}
            value={duration}
          />
          <button
            type="submit"
            className="p-2 border-spacing-1 my-8 bg-blue-400 "
          >
            Create Todo
          </button>
        </form>
      </div>
      <div>{showTodo && <TodoList task={task} duration={duration} />}</div>
    </div>
  );
};

export default Home;
