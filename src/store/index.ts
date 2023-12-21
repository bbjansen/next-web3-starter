import { configureStore } from "@reduxjs/toolkit";

import apiSlice from './api/slice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production" as string,
})

export default store;