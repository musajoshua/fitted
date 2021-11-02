export default (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    default:
      return state;
  }
};
