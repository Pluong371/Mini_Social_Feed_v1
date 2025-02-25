import axiosClient from "./axiosClient";
const getUser = async () => {
  const response = await axiosClient.get("/user");
  console.log(response.data);
  return response.data;
};

export { getUser };
