const postReducer = (
  state = {
    loading: false,
    posts: [],
    post: {},
  },
  action
) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "CREATE_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "GET_ALL_POSTS":
      return { ...state, posts: action.payload };
    case "GET_POST":
      console.log(action.payload);
      return { ...state, post: action.payload };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
