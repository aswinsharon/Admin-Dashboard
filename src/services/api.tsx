import axios from "axios";
import { UserType, UserFormResponse } from "Types";
const BASE_URL = process.env.REACT_APP_DASHBOARD_API;

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchUsers = async (): Promise<UserType[]> => {
  console.log("BASE_URL", BASE_URL);
  try {
    const usersResponse = await api.get("/users");
    console.log(usersResponse);
    return usersResponse.data;
  } catch (error) {
    console.log("error fetching users", error);
    throw error;
  }
};

const createUsers = async (newUserObject: UserFormResponse) => {
  try {
    const createResponse = await api.post("/users/add", newUserObject);
    console.log(createResponse);
    return createResponse.data;
  } catch (error) {
    console.log("error creating users", error);
    throw error;
  }
};

const deleteUser = async (Id: string) => {
  try {
    const deleteResponse = await api.delete(`users/${Id}`);
    return deleteResponse;
  } catch (error) {
    throw error;
  }
};
const userApi = {
  fetchUsers,
  createUsers,
  deleteUser,
};
export default userApi;
