import axios from "axios";
import { UserType, UserFormResponse } from "Types";
const BASE_URL = "http://localhost:8081/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchUsers = async (): Promise<UserType[]> => {
  try {
    const usersResponse = await api.get("/users");
    console.log("user data under", usersResponse.data);
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
