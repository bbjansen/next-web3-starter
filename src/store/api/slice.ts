import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Item } from "./types";
import { serializersCelo } from "viem/chains/utils";

const slice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    endpoints: (builder) => ({
        getItemsById: builder.query<Item[], void>({
            query: (id) => `/items/${id}` 
        })
    })
})

export default slice;
export const { useGetItemsById } = slice;
