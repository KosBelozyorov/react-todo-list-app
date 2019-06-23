import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  if (toDo === 0) {
    return (
      <div className="app-header d-flex">
        <h1>My Todo List</h1>
        <h2>{toDo} more to do, {done} done</h2>
        <h2 className="no-to-do">Add what you need to do!</h2>
      </div>
    );
  }
  return (
    <div className="app-header d-flex">
      <h1>My Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;