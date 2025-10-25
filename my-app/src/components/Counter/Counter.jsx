import React from "react";
import "./Counter.css";
import { Buttons } from "./Buttons";

class Counter extends React.Component {
  static defaultProps = {
    initialValue:0,
  }
  // 1
  //   constructor() {
  //     super()
  //     this.state = {
  //       value: 250,
  //   }
  // }
  // 2
  state = {
    // value: 0,
    value: this.props.initialValue
  };

  handleIncreament = () => {
    // перетерання стейту
    // this.setState({ value: 75 });

    // привязка стейту до дії
    this.setState((prevState) => ({
      value: prevState.value + 2,
    }));
  };

  handleDecreament = () => {
    this.setState((prevState) => ({
      value: prevState.value - 2,
    }));
  };

  render() {
    return (
      <div className="counter">
        <span className="counter-value">{this.state.value}</span>
        <Buttons
          onIncreament={this.handleIncreament}
          onDecreament={this.handleDecreament}
        />
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
