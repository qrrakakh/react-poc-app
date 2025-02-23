import React, { useState, useReducer, useRef } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {
        age: state.age + 1
      }
    case 'decrement':
      return {
        age: state.age - 1
      }
    default:
      console.log(`Unknwon action: `+action.type)  
  }
}

export function ReducerExample(props) {
  const [state, dispatch] = useReducer(reducer, { age: 0 })

  return (
    <>
    <div>Current state: {state.age}</div>
    <button onClick={() => {dispatch({type: 'increment'})}}>Click to increment</button>
    <button onClick={() => {dispatch({type: 'decrement'})}}>Click to decrement</button>
    </>
  )
}

export function StateExample(props) {
  const [count, setCount] = useState(0);
  // addCount = () => setCount(count + 1);
  function addCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button
        className='btn-primary'
        onClick={addCount}>
          Click me
        </button>
    </div>
  );
}

export function RefExample(props) {
  let count = useRef(0)

  function handleClick() {
    count.current = count.current + 1;
    alert('You clicked ' + count.current + ' times!')
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me!</button>
      </div>
      <div>
        If we refer valiable using useRef -&gt; {count.current}: not updated!
      </div>
    </>
  )
}