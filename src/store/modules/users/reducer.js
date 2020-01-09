const INITIAL_STATE = { status: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_STATUS':
      console.log(action);
      return { status: action.status };

    default:
      return state;
  }
};
