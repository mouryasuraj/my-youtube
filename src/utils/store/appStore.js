import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slices/appSlice'
import videosReducer from '../slices/videosSlice'
import searchReducer from '../slices/searchSlice'

const appstore = configureStore({
    reducer: {
        app: appReducer,
        videos: videosReducer,
        search: searchReducer
    }
})

export default appstore