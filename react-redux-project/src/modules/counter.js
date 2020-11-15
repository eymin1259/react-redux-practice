// ducks 패턴

// action type : 모듈이름/액션이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// initial state
const initState = {
  number: 0,
};

//reducer function
function counter(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
