import { apiConfig } from "@/api";

const getJobsLists = async (
  query: string,
  token: string,
  page: number,
  limit: number
) => {
  const res = await apiConfig.post(
    "/job/search/",
    { query, page, limit },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(res);
  return res;
};

const getJobById = async (id: string, token: string) => {
  console.log(token);
  const res = await apiConfig.get(`/job/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res;
};

export { getJobsLists, getJobById };
