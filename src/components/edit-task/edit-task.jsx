import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTask = ({ id, onEditTask, description, editTask, enableEditTask, editCounter }) => {
  const [newDescription, valueForm] = useState(description);

  const minutes = Math.floor(editCounter / 60);

  const seconds = editCounter % 60;

  return (
    <div>
      {onEditTask ? (
        <li className="editing">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              editTask(id, newDescription, minutes, seconds);
              enableEditTask();
            }}
          >
            <input
              type="text"
              className="edit"
              value={newDescription}
              onChange={(event) => valueForm(event.target.value)}
            />
            <input value={minutes} hidden />
            <input value={seconds} hidden />
            <input type="submit" value="Добавить" hidden />
          </form>
        </li>
      ) : null}
    </div>
  );
};

EditTask.defaultProps = {
  description: '',
  editTask: () => {},
  enableEditTask: () => {},
  editCounter: 0,
};

EditTask.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  onEditTask: PropTypes.bool.isRequired,
  editTask: PropTypes.func,
  enableEditTask: PropTypes.func,
  editCounter: PropTypes.number,
};

export default EditTask;
