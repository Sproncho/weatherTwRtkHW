import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {weatherInfo} from "../utils/constants";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeather(state, action:PayloadAction<weatherInfo>){
            return action.payload;
        }
    }
})

export const {putWeather} = weatherSlice.actions;
export default weatherSlice.reducer;