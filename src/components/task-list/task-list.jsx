import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import './task-list.css';

const TaskList = ({ todos, deleteTask, onToggleDone, filter, editTask }) => {
  let filterTodos = todos;
  if (filter === 'active') {
    filterTodos = todos.filter((item) => !item.done);
  }

  if (filter === 'completed') {
    filterTodos = todos.filter((item) => item.done);
  }

  const elements = filterTodos.map((item) => {
    const { id, dataTask, done, ...itemProps } = item;

    return (
      <Task
        key={id}
        id={id}
        dataTask={dataTask}
        done={done}
        {...itemProps}
        deleteTask={() => deleteTask(id)}
        onToggleDone={() => onToggleDone(id)}
        editTask={editTask}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  onToggleDone: () => {},
  deleteTask: () => {},
  filter: '',
  editTask: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleDone: PropTypes.func,
  deleteTask: PropTypes.func,
  filter: PropTypes.string,
  editTask: PropTypes.func,
};

export default TaskList;
