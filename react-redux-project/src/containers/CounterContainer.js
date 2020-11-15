import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter'; // action creators

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const todoNumber = useSelector((state) => state.todos.todos.length);

  // 디스패치 : 액션객체를 파라미터로 받아서 실행하면 스토어의 리듀서 함수가 실행되어 새로운 상태를 만든다

  const dispatch = useDispatch();
  return (
    <Counter
      todoNumber={todoNumber}
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
