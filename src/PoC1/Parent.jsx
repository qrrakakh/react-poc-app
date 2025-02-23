import React from 'react';
import { Child } from './Child';


export class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'DATA'
    };
  }

  handleChangeValue(event) {
    this.setState({
      value: event.target.value,
    });
  }

  logValue() {
    alert(this.state.value);
  }

  render() {
    const value = this.state.value;
    return (
      <div className="container poc-container">
        <h2 id="poc1">PoC 1 - Data updates from child element</h2>
        <Child
          value={value}
          onChangeValue={(event) => this.handleChangeValue(event)} />
        <button className="btn btn-primary"  onClick={() => this.logValue()}>Log value</button>
      </div>
    );
  }
}
