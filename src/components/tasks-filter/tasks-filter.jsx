import React from 'react';
import PropTypes from 'prop-types';
import './tasks-filter.css';

const TasksFilter = ({ addFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button type="button" className="" onClick={() => addFilter('all')}>
          All
        </button>
      </li>
      <li>
        <button type="button" className="" onClick={() => addFilter('active')}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className="" onClick={() => addFilter('completed')}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.defaultProps = {
  addFilter: () => {},
};

TasksFilter.propTypes = {
  addFilter: PropTypes.func,
};

export default TasksFilter;
