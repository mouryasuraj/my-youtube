import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slices/appSlice'

const appstore = configureStore({
    reducer: {
        app: appReducer
    }
})

export default appstore