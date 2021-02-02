import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';
import EditTask from '../edit-task/edit-task';
import './task.css';
import App from '../timer/new-timer';

const Task = ({ id, description, minutes, seconds, deleteTask, onToggleDone, done, dataTask, editTask }) => {
  const [onEditTask, enableEditTask] = useState(false);
  const [editCounter, setEditCounter] = useState();

  return (
    <div>
      {!onEditTask ? (
        <li className={clsx('todo-item', done && 'completed')}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
            <label>
              <span className="description">{description}</span>
              <App minutes={minutes} seconds={seconds} setEditCounter={setEditCounter} />
              <span className="created">
                created{' '}
                {formatDistanceToNow(dataTask, {
                  includeSeconds: true,
                })}
              </span>
            </label>
            <button
              type="button"
              className="icon icon-edit"
              onClick={() => enableEditTask(!onEditTask)}
              aria-label="Button"
            />
            <button type="button" className="icon icon-destroy" onClick={deleteTask} aria-label="Button" />
          </div>
        </li>
      ) : null}
      <EditTask
        id={id}
        onEditTask={onEditTask}
        description={description}
        editTask={editTask}
        enableEditTask={enableEditTask}
        editCounter={editCounter}
      />
    </div>
  );
};

Task.defaultProps = {
  done: false,
  onToggleDone: () => {},
  deleteTask: () => {},
  editTask: () => {},
  description: 'Тестовый Task',
  minutes: 'Тестовый Task',
  seconds: 'Тестовый Task',
  dataTask: new Date(),
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  description: PropTypes.string,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  dataTask: PropTypes.instanceOf(),
};

export default Task;
