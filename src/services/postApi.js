import axiosClient from "./axiosClient";

export const getPosts = async () => {
  try {
    const response = await axiosClient.get("/posts");
    localStorage.setItem("posts", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    const localPosts = localStorage.getItem("posts");
    return localPosts ? JSON.parse(localPosts) : [];
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axiosClient.post("/posts", postData);
    const currentPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    currentPosts.unshift(response.data);
    localStorage.setItem("posts", JSON.stringify(currentPosts));
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
