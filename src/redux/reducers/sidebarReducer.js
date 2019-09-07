const sidebarReducer = (state = { open: false, firstTime: false }, action) => {
  switch (action.type) {
    case "open":
      return { ...state, open: true };
    case "close":
      return { ...state, open: false };
    case "setTrue":
      return { ...state, firstTime: true };
    default:
      return state;
  }
};

export default sidebarReducer;
