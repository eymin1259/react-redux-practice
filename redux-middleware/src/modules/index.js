import { combineReducers } from 'redux';
import sampleThunk from './sampleThunk';
import loading from './loading';

const rootReducer = combineReducers({
  sampleThunk,
  loading,
});

export default rootReducer;
