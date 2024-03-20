import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slices/appSlice'
import videosReducer from '../slices/videosSlice'
import searchReducer from '../slices/searchSlice'
import chatReducer from '../slices/chatSlice'

const appstore = configureStore({
    reducer: {
        app: appReducer,
        videos: videosReducer,
        search: searchReducer,
        chat: chatReducer
    }
})

export default appstore