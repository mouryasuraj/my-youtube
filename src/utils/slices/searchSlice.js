import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        cacheResults: {}
    },
    reducers: {
        addCacheResults: (state, action) => {
            state.cacheResults = { ...state.cacheResults, ...action.payload }
        }
    }
})

export const { addCacheResults } = searchSlice.actions
export default searchSlice.reducer;