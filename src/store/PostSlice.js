import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      localStorage.setItem("posts", JSON.stringify(action.payload));
    },
    toggleLike: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        if (!post.likes) post.likes = 0;

        post.isLiked = !post.isLiked;

        if (post.isLiked) {
          post.likes += 1;
        } else {
          post.likes = Math.max(0, post.likes - 1);
        }

        localStorage.setItem("posts", JSON.stringify(state.posts));
      }
    },
    addPost: (state, action) => {
      const newPost = {
        id: crypto.randomUUID(),
        name: "Minh Lương",
        role: "@MinhLuong",
        time: new Date().toISOString(),
        content: action.payload.content,
        media_type: action.payload.media_type,
        media_url: action.payload.media_url,
        likes: 0,
        comments: 0,
        shares: 0,
        commentsList: [],
        isLiked: false,
      };
      state.posts.unshift(newPost);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, content } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.content = content;
      }
    },
  },
});

export const { setPosts, addPost, deletePost, updatePost, toggleLike } =
  postSlice.actions;
export default postSlice.reducer;
