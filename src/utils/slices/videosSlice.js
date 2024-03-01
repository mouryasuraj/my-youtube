import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'video',
    initialState: {
        homePageVideos: null,
    },
    reducers: {
        addHomePageVideos: (state, action) => {
            state.homePageVideos = action.payload
        }
    }
})

export const { addHomePageVideos } = videosSlice.actions;
export default videosSlice.reducer