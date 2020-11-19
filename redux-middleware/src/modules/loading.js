//ducks 패턴

//action type
const START_LOADING = 'loading/START_LOADING';
const END_LOADING = 'loading/END_LOADING';

// action creator
export const startLoading = () => ({
  type: START_LOADING,
});
export const endLoading = () => ({
  type: END_LOADING,
});

const initState = {
  loadingPost: false,
};

//reducer
function loading(state = initState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        loadingPost: true,
      };
    case END_LOADING:
      return {
        loadingPost: false,
      };
    default:
      return state;
  }
}

export default loading;
