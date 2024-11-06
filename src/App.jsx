import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-green-400 via-pink-400 to-red-500 min-h-screen flex items-center justify-center grid py-4 h-screen">
      <Todo />
    </div>
  );
};

export default App;
