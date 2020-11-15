//ducks패턴

//acion types : 모듈이름/액션이름
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = ' todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// action creator
let id = 3;
export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

//initail state
const initState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'example text 1',
      done: false,
    },
    {
      id: 2,
      text: 'example text 2',
      done: false,
    },
  ],
};

// reducer
function todos(state = initState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT: {
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
