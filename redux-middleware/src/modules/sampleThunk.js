import * as api from '../lib/api';

import { startLoading, endLoading } from './loading';
// ducks패턴

// action type
// request 하나당 세개의 액션타입(요청,요청성공,요청실패)생성
const GET_POST = 'thunk/GET_POST';
const GET_POST_SUCCESS = 'thunk/GET_POST_SUCCESS';
const GET_POST_FAIL = 'thunk/GET_POST_FAIL';

//thunk function
// thunk함수 내부에서
// 1.요청시작시 2.요청성공시 3.요청실패시 마다 다른 액션 디스패치
export const getPost = (id) => async (dispatch) => {
  // 요청시작
  dispatch({ type: GET_POST });
  dispatch(startLoading());
  try {
    const res = await api.getPost(id);
    // 요청성공
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data,
    });
    dispatch(endLoading());
  } catch (e) {
    //요청실패
    dispatch({
      type: GET_POST_FAIL,
      payload: e,
      error: true,
    });
    dispatch(endLoading());
    throw e;
  }
};

const initState = {
  post: null,
};

function sampleThunk(state = initState, action) {
  switch (action.type) {
    case GET_POST_FAIL:
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}

export default sampleThunk;
