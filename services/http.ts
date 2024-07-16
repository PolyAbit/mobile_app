import { Api } from "@/constants/Api";

const baseUrl = Api.Content;

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: BodyInit;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: ReferrerPolicy;
  signal?: AbortSignal;
}

interface FetchResponse<T> {
  status: number;
  ok: boolean;
  json(): Promise<T>;
}

interface FetchError {
  error: string;
  status: number;
}

function http<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T | FetchError> {
  const fullUrl = new URL(url, baseUrl);

  let modifiedOptions = {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAcG9seWFiaXQucnUiLCJleHAiOjE3MjEwOTk4OTksInVpZCI6Mn0.Dm8KvYx6xmKCfLiic-GBz61eIMIihvsoxp2PPlYS068"}`,
      "Content-Type": "application/json",
    },
    ...options,
  };

  return fetch(fullUrl, modifiedOptions)
    .then((response) => {
      if (response.status === 401) {
        // TODO: logout
        return Promise.reject({
          error: "Unauthorized",
          status: 401,
        } as FetchError);
      }

      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json() as Promise<T>;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export { http, FetchError };
