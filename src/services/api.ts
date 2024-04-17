import axios, { AxiosError } from "axios";
import { UserFormResponse, LoginData } from "Types";
import { Constants } from "../configs/constants";
import { parseCookies } from "../utils/utils";
// import { getCookie } from "../utils/utils";
const BASE_URL = process.env.REACT_APP_DASHBOARD_API || Constants.DEFAULT_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
const getAccessToken = () => {
  const cookies = parseCookies();
  const accessToken = cookies['accessToken'];
  return accessToken;
}

const login = async (loginData: LoginData) => {
  let loginResponse: any;
  try {
    loginResponse = await api.post("/api/v1/login", loginData);
    return loginResponse.data;
  } catch (error: any) {
    if (error.response?.status) {
      const status = error.response.status;
      if ([400, 401, 403, 500].includes(status)) {
        return error.response.data;
      }
    }
    return error;
  }
};

const fetchUsers = async (): Promise<any> => {
  let usersResponse;
  try {
    // const accessToken = getCookie();
    // console.log(accessToken);
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": `${accessToken}`,
    }
    usersResponse = await api.get("/api/v1/users", {
      headers
    });

  } catch (error: any) {
    // if (error.response?.status) {
    //   const status = error.response.status;
    //   if (status === 400 || status === 401 || status === 403 || status === 500) {
    //     return error.response;
    //   }
    // }
    // return error;
    usersResponse = error;
  }
  return usersResponse;
};

const createUsers = async (newUserObject: UserFormResponse) => {
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": `${accessToken}`,
    }
    const createResponse = await api.post("/api/v1/users/add", newUserObject, {
      headers
    })
    console.log('createResponse', JSON.stringify(createResponse, null, 2))
    return createResponse.data;
  } catch (error: any) {
    if (error.response?.status) {
      const status = error.response.status;
      if (status === 400 || status === 401 || status === 403 || status === 500) {
        return error.response.data;
      }
    }
    return error;
  }
};

const deleteUser = async (Id: string) => {
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": `${accessToken}`,
    }
    const deleteResponse = await api.delete(`/api/v1/users/${Id}`, {
      headers
    });
    return deleteResponse;
  } catch (error: any) {
    if (error.response?.status) {
      const status = error.response.status;
      if (status === 400 || status === 401 || status === 403 || status === 500) {
        return error.response.data;
      }
    }
    return error;
  }
};
const userApi = {
  fetchUsers,
  createUsers,
  deleteUser,
  login,
};
export default userApi;
