import { apiConfig } from "@/api";
import { URI } from "@/api/config";
import { AxiosResponse } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
const loginUser = async (username: any, password: any) => {
  try {
    const res: AxiosResponse | any = await apiConfig.post(
      URI.loginUser,
      {
        username,
        password,
      },
      {}
    );
    localStorage.setItem("token", res.headers["access_token"].split(" ")[1]);
    return res?.status;
  } catch (error: any) {
    return error.status;
  }
};
const getUser = async () => {
  const res: any = await apiConfig.get(URI.getUser, {});
  console.log("Response", res);
  console.log("Cookiee", res.headers["Authorization"]);
  return res?.status;
};

export { loginUser, getUser };
