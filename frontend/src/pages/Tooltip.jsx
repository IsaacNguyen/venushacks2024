import React, { useState } from 'react';
import styles from './styles/Tooltip.module.css'; // Assume we have some CSS for styling

const Tooltip = (info) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div>
      <div
        className={styles.target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {info.hover}
      </div>
      {visible && (
        <div
          className={styles.tooltip}
          style={{
            left: `${position.x + 10}px`,
            top: `${position.y + 10}px`
          }}
        >
          <h2>{info.head}</h2>
          {info.body}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
