import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  handleIncreament = () => {
    console.log(+1);
  };
  handleDecreament = () => {
    console.log(-1);
  };
  render() {
    return (
      <div className="counter">
        <span className="counter-value">0</span>
        <div className="counter-controls">
          <button type="button" onClick={this.handleIncreament}>
            +1
          </button>
          <button type="button" onClick={this.handleDecreament}>-1</button>
        </div>
      </div>
    );
  }
}

// const Counter = () => {
//     return (
//         <div className="counter">
//             <span className="counter-value">0</span>
//             <div className="counter-controls">
//                 <button type="button">+1</button>
//                 <button type="button">-1</button>
//             </div>
//         </div>
//     )
// }

export default Counter;
