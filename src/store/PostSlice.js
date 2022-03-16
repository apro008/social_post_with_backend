import {createSlice} from '@reduxjs/toolkit';
import {API} from '../../config.js';

export const initialState = {
  allPosts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, {payload}) => {
      state.allPosts = payload;
    },

    createPost: (state, {payload}) => {
      state.allPosts.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {getPosts, createPost} = postSlice.actions;

export default postSlice.reducer;

export function fetchPosts() {
  return async dispatch => {
    console.log(`API`, `${API}posts`);
    try {
      const response = await fetch(`${API}/posts`);
      const data = await response.json();

      dispatch(getPosts(data));
    } catch (error) {
      console.log(`error fetchPosts`, error);
    }
  };
}

export const submitPost = async newPost => {
  try {
    const response = await fetch(`${API}/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    if (response) {
      const resData = await response.json();
      return resData;
    }
  } catch (e) {
    console.log(e);
  }
};
