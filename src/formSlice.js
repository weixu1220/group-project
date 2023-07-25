import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


const initialState = {
    userName: '',
    height: '',
    width: '',
    jokeList: []
}
// function storedData(){    
//         let storedWidth = localStorage.getItem('width')
//         let storedHeight = localStorage.getItem('height')
//         let storedInsult = localStorage.getItem('insult')
//         let storedInsultParsed = JSON.parse(storedInsult)       
//         if(storedWidth.length === 0){

//             return ({
//                 userName: '',
//                 height: '',
//                 width: '',
//                 jokeList: []
//             })
//         }
//         else {return ({
//             userName: '',
//             height: storedHeight,
//             width: storedWidth,
//             jokeList: storedInsultParsed
//         })}
//     }

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