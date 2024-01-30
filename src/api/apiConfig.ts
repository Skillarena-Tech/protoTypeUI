/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { backend } from "./config";

const api = axios.create({
  baseURL: backend,
});

export const apiConfig = {
  get: async (
    url: string,
    headers: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    try {
      console.log("Headers", headers);

      const res = await api.get(url, headers);
      return res;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  post: async (url: string, body: any, headers: AxiosRequestConfig) => {
    try {
      const res = await api.post(url, body, headers);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  put: async (url: string, body: any, headers: AxiosRequestConfig) => {
    try {
      const res = await api.put(url, body, headers);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  delete: async (url: string, headers: AxiosRequestConfig) => {
    try {
      const res = await api.delete(url, headers);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
