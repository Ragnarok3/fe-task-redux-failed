import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice
 } from "@reduxjs/toolkit";


 type BlogItem = {
    id:  string;
    title: string;
    description:string;
    image: string;
 }
 type BlogState = {
    items: BlogItem[]
 }


 const initialState: BlogState = {
    items: []
 }

 export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        saveData(state,action: PayloadAction<BlogItem[]>){
            
        }
    }
});

 export const {saveData} = blogSlice.actions;