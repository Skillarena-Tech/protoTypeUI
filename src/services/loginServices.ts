import { URI, backend } from "@/api/config";
import axios, { AxiosResponse } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
const loginUser = async (username: any, password: any) => {
  try {
    const res: AxiosResponse | any = await axios.post(
      `${backend}${URI.loginUser}`,
      {
        username,
        password,
      }
    );
    localStorage.setItem("token", res.headers["authorization"].split(" ")[1]);
    return res;
  } catch (error: any) {
    return error;
  }
};

export { loginUser };

