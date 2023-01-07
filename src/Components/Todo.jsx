import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  const inputChange = (event) => {
    setInputData(event.target.value);
  };
  const handleClick = () => {
    if (!inputData) {
      alert("Please Add something in the List");
    } else {
      setTodoItem([...todoItem, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updateItem = todoItem.filter((element, index) => {
      return index !== id;
    });
    setTodoItem(updateItem);
  };

  const deleteAll = () => {
    setTodoItem([])
  }
  return (
    <>
      <div className="container w-screen h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center">
        <div className="container1 border-2 border-black rounded w-full h-full">
          <h1 className="text-3xl  text-center mt-5 border-b-black border-b-2 pb-3">
            Todo List by Tushar
          </h1>
          <input
            type="text"
            placeholder="Plan your day!"
            className="w-10/12 text-center ml-4 mt-4 h-10 border-2 border-black rounded-full bg-transparent placeholder:text-black text-lg"
            value={inputData}
            onChange={inputChange}
          />
          <button
            className="border-2 border-black ml-1 text-lg  p-2 hover:bg-red-400 hover:text-white rounded-full"
            onClick={handleClick}
          >
            Add
          </button>

          {todoItem.map((element, index) => {
            return (
              <div className="container2" key={index}>
                <h2 className="ml-5 mt-5 text-2xl text-end ">
                  {element}
                  <span
                    className="text-lg border-2 border-black p-2 ml-3  hover:bg-red-400 hover:text-white rounded-full "
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    Delete
                  </span>
                </h2>
              </div>
            );
          })}

          <div className="footer absolute bottom-5 text-center w-full">
            <footer>
              <button className="border-2 border-black px-9 hover:bg-red-400 hover:text-white py-2 " onClick={deleteAll}>Delete All</button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
