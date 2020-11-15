import React from 'react';

// todo item 갯수와 연동시키기
const Counter = ({ todoNumber, number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>counter : {number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
      <br />
      <div>
        <h1>todo number : {todoNumber}</h1>
      </div>
    </div>
  );
};

export default Counter;
