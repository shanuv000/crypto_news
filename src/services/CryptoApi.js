// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "df5446d358msh92435ea35de93f9p11eea2jsn5142275af42e",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({ query: () => createRequest("/coins") }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
