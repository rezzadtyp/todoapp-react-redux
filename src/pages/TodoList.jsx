// TodoList.jsx
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoIsDone } from "../redux/slices/counterAddTodo";
import { useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.counter.todos);
  const [newTodo, setNewTodo] = useState("");

  const handleDelete = (e) => {
    dispatch(deleteTodo(e));
  };

  const handleIsDone = (e) => {
    dispatch(todoIsDone(e));
  };

  const handleAddTodo = () => {
    if (!newTodo){
      return alert("input ga boleh kosong!")
    }
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div className="bg-slate-800 h-screen">
      <div className="container mx-auto text-white masw-w-[800px]">
        <h1 className="text-center text-3xl font-bold">Chores ToDo List</h1>

        <table className="w-full">
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handleIsDone(index)}
                  />
                </td>
                <td>
                  <p className={todo.isDone ? "line-through" : ""}>
                    {todo.title}
                  </p>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>

        <h1 className="text-center text-3xl font-bold">
          Done: {todos.filter(todo => todo.isDone).length}
        </h1>
        <div>
          <input
            type="text"
            className="w-full text-black"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-slate-400 p-2 rounded-2xl"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
