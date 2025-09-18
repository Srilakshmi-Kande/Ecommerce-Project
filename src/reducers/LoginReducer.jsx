export const LoginReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload.value,
      };

    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };

    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };

    case "TOKEN":
      return {
        ...state,
        token: payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        token: "",
      };

    default:
      return state;
  }
};
