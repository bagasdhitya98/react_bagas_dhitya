import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import modeReducer from './features/modeSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        mode: modeReducer
    }
})

export default store