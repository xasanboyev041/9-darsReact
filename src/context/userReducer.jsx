export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "FIRE_USER":
      const firedUser = state.users.find((user) => user.id === action.payload);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        firedUsers: [...state.firedUsers, firedUser],
      };
    default:
      return state;
  }
};
