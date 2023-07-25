import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: '',
    height: '',
    width: '',
    jokeList: []
}

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        changeInput: (state, action) => {
            console.log('change input in')
            // action.payload {name: name, height: 123, width: 1231}
            state.userName = action.payload.name
            state.height = action.payload.height
            state.width = action.payload.width
            console.log(state.userName)
            console.log(state.width)
            console.log(state.height)
        },
        pushJoke: (state, action) => {
            state.jokeList.push(action.payload)
        }
    }
})

export default formSlice.reducer

export const { changeInput, pushJoke } = formSlice.actions