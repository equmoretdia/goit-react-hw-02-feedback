import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      {total > 0 ? (
        <ul className={css.wrapper}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {total}</li>
          <li className={css.item}>Positive feedback: {positivePercentage}</li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
