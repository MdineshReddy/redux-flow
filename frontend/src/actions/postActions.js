import * as API from "../api";

export const createPost = (formData) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { data } = await API.createPost(formData);
    if (data.success) {
      dispatch({ type: "CREATE_POST", payload: data.post });
    }
  } catch (e) {
    console.log(e.response);
  }
  dispatch({ type: "STOP_LOADING" });
};

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { data } = await API.getAllPosts();
    if (data.success) {
      dispatch({ type: "GET_ALL_POSTS", payload: data.posts });
    }
  } catch (e) {
    console.log(e.response);
  }
  dispatch({ type: "STOP_LOADING" });
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { data } = await API.getPost(id);
    if (data.success) {
      dispatch({ type: "GET_POST", payload: data.post });
    }
  } catch (e) {
    console.log(e.response);
  }
  dispatch({ type: "STOP_LOADING" });
};

export const editPost = (id, formData) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  console.log(formData);
  try {
    const { data } = await API.editPost(id, formData);
    if (data.success) {
      dispatch({ type: "EDIT_POST", payload: data.post });
    }
  } catch (e) {
    console.log(e.response);
  }
  dispatch({ type: "STOP_LOADING" });
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { data } = await API.deletePost(id);
    if (data.success) {
      dispatch({ type: "DELETE_POST", payload: id });
    }
  } catch (e) {
    console.log(e.response);
  }
  dispatch({ type: "STOP_LOADING" });
};
