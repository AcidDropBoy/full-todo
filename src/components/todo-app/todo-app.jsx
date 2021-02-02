import React, { useState } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './todo-app.css';

const TodoApp = () => {
  const [filter, addFilter] = useState('');
  const [todoData, addTodo] = useState([]);

  const generateNewId = (arr) =>
    arr.length === 0 ? 0 : [...arr].sort((itemA, itemB) => itemB.id - itemA.id)[0].id + 1;

  const addTask = (description, minutes = 0, seconds = 0) => {
    const newId = generateNewId(todoData);

    const newTask = {
      description,
      done: false,
      id: newId,
      dataTask: new Date(),
      minutes,
      seconds,
    };

    const newTodoData = [...todoData, newTask];

    addTodo(newTodoData);
  };

  const deleteTask = (id) => {
    const newData = todoData.filter((item) => id !== item.id);

    addTodo(newData);
  };

  const onToggleDone = (id) => {
    const newData = todoData.map((item) => {
      if (id === item.id) {
        return { ...item, done: !item.done };
      }

      return item;
    });

    addTodo(newData);
  };

  const deleteСompleted = () => {
    const newData = todoData.filter((item) => !item.done);

    addTodo(newData);
  };

  const editTask = (id, description, minutes, seconds) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const oldTask = todoData[idx];
    const newTask = { ...oldTask, description, minutes, seconds };
    const newData = [...todoData.slice(0, idx), newTask, ...todoData.slice(idx + 1)];

    addTodo(newData);
  };

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <TaskList
        todos={todoData}
        filter={filter}
        deleteTask={deleteTask}
        onToggleDone={onToggleDone}
        editTask={editTask}
      />
      <Footer todoCount={todoCount} deleteСompleted={deleteСompleted} addFilter={addFilter} />
    </section>
  );
};

export default TodoApp;
