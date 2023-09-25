import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    language: false
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = !state.language
        }
    }
})

export const {toggleLanguage} = modeSlice.actions
export default modeSlice.reducer