/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiConfig } from "@/api";
import { token } from "./tokenService";

const getJobsListOnSearch = async (
  query: string,
  location: string,
  page: number,
  limit: number
) => {
  const res: any = await apiConfig.post(
    "/job/search/",
    {
      query,
      location,
      page,
      limit,
    },
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );
  return res;
};

const getJobList = async (limit: number, page: number) => {
  const res: any = await apiConfig.post(
    "/job/list",
    { page, limit },
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );
  return res.data;
};

export { getJobList, getJobsListOnSearch };
