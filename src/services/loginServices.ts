import { apiConfig } from "@/api";
import { URI } from "@/api/config";

/* eslint-disable @typescript-eslint/no-explicit-any */
const loginUser = async (username: any, password: any) => {
  const res: any = await apiConfig.post(
    URI.loginUser,
    { username, password },
    {}
  );
  return res?.status;
};

export { loginUser };
