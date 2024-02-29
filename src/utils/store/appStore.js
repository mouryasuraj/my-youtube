import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slices/appSlice'
import videosReducer from '../slices/videosSlice'

const appstore = configureStore({
    reducer: {
        app: appReducer,
        videos: videosReducer
    }
})

export default appstore