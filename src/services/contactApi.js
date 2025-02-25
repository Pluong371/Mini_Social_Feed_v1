import axiosClient from "./axiosClient";

const getContact = async () => {
  const response = await axiosClient.get("/friends");
  return response.data;
};

export { getContact };
