import React from 'react';
import styles from './styles/Circle.module.css';

const MooScore = ({highlighted }) => {
  return (
    <div className={styles.circle}>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className={`segment ${i < highlighted ? 'highlighted' : ''}`}></div>
      ))}
    </div>
  );
};

export default MooScore;
