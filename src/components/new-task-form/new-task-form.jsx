import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

const NewTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  return (
    <form
      className="new-todo-form"
      onSubmit={(event) => {
        event.preventDefault();
        addTask(description, minutes, seconds);
        setDescription('');
        setMinutes('');
        setSeconds('');
      }}
    >
      <input
        className="new-todo"
        placeholder="Task"
        name="description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        name="minutes"
        onChange={(event) => setMinutes(event.target.value)}
        value={minutes}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        name="seconds"
        onChange={(event) => setSeconds(event.target.value)}
        value={seconds}
      />
      <input type="submit" value="Добавить" hidden />
    </form>
  );
};

NewTaskForm.defaultProps = {
  addTask: () => {},
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default NewTaskForm;
