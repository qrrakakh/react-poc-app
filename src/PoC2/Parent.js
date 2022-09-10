import React from 'react';

export class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'DATA'
    };
    this.logValueBinded = this.logValueBinded.bind(this);
  }

  logValuePublicClassfield = () => this.logValue();

  logValue() {
    alert(this.state.value);
  }

  logValueBinded() {
    alert(this.state.value);
  }

  render() {
    return (
      <>
        <h2 id="poc2">PoC 2 - "this" in JavaScript</h2>
        <div>
        <h3> Correct case 1: explicitly binded method</h3>
          <pre>
          {`
          // in constructor
          this.logValueBinded = this.logValueBinded.bind(this);

          <button onClick={() => this.logValueBinded()}>Correct 1</button>
          `}
          </pre>
          <button onClick={this.logValueBinded}>Correct 1</button>
        </div>
        <div>
        <h3> Correct case 2: define method in public class field</h3>
          <pre>
          {`
            export class Parent extends React.Component {
              ...
              logValuePublicClassfield = () => this.logValue();

              <button onClick={() => this.logValuePublicClassfield()}>Correct 2</button>
          `}
          </pre>
          <button onClick={this.logValuePublicClassfield}>Correct 2</button>
        </div>
        <div>
        <h3> Correct case 3: allow method to create function that calls instance method</h3>
          <pre>
          {`
          <button onClick={() => this.logValue()}>Correct 3</button>
          `}
          </pre>
          <button onClick={() => this.logValue()}>Correct 3</button>
        </div>
        <div>
        <h3> Incorrect case: unbinded method passing</h3>
          <pre>
          {`
            <button onClick={this.logValue}>Incorrect</button>
            `}
          </pre>
        <button onClick={this.logValue}>Incorrect</button>
        </div>      
        
      </>
    );
  }
}
