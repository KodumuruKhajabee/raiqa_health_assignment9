import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const addToList = () => {
    if (count > 0) {
      setNumbers([...numbers, count]);
      setCount(0);
    }
  };

  const removeItem = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const resetList = () => {
    setNumbers([]);
  };

  const sortList = () => {
    const sorted = [...numbers].sort((a, b) => (sortAsc ? a - b : b - a));
    setNumbers(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Counter & List App</h1>

      {/* Counter Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col items-center">
        <p className="mb-2 font-medium">Counter</p>
        <div className="flex items-center gap-6 mb-4">
          <button
            onClick={decrement}
            className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-2xl font-bold">{count}</span>
          <button
            onClick={increment}
            className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button
          onClick={addToList}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Add to List
        </button>
      </div>

      {/* List Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Numbers List</h2>
          <div className="flex gap-2">
            <button
              onClick={resetList}
              className="bg-red-100 text-red-500 px-2 py-1 rounded hover:bg-red-200"
            >
              Reset
            </button>
            <button
              onClick={sortList}
              className="bg-blue-100 text-blue-500 px-2 py-1 rounded hover:bg-blue-200"
            >
              Sort {sortAsc ? "↑" : "↓"}
            </button>
          </div>
        </div>

        {/* Numbers */}
        <ul className="mb-4">
          {numbers.map((num, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center border-b py-1"
            >
              <span>
                {num} <span className="text-gray-400">#{idx + 1}</span>
              </span>
              <button
                onClick={() => removeItem(idx)}
                className="text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        <p className="text-sm text-blue-500">
          Total numbers: {numbers.length}
        </p>
      </div>
    </div>
  );
}

export default App;
