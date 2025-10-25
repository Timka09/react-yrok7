import React from "react";

export const Buttons = ({ onIncreament, onDecreament }) => {
  return (
    <div className="counter-controls">
      <button type="button" onClick={onIncreament}>
        +1
      </button>
      <button type="button" onClick={onDecreament}>
        -1
      </button>
    </div>
  );
};