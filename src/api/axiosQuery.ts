import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import axios from "axios";
import { authSlice } from "../store/authSlice";
import { RootState } from "../store/store";
export const axiosBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
    token?: string | null;
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method = "get", data, params }, { getState }) => {
    const state = getState() as RootState;
    const token = state[authSlice.name].user?.token;
    try {
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }

      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
