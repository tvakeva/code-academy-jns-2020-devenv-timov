const initialState = {};

export default function (store = initialState, { type, payload }) {
  switch (type) {
    case "LOGOUT_FULFILLED": {
      return initialState;
    }
    case "GET_SESSION_FULFILLED":
      return {
        ...store,
        ...payload,
      };
    default:
      return store;
  }
}
