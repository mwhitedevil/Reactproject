import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Reducers/Slice";

const Store = configureStore({
    reducer : {
  
        Card :Slice
        

    }
})
export default Store;