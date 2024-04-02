import { createSlice } from "@reduxjs/toolkit";
// import { defaults } from "autoprefixer";

const CradSlice = createSlice({
    name : 'Card',
    initialState :{
        CardItem :[]
    },
    reducers:{
        removeCard: (state, action) => {
            state.CardItem = state.CardItem.filter(
                (cardItem) => cardItem.id !== action.payload.id
                );
                // console.log(state.CardItem);
                // console.log(cardItem)
        }

    }
})
export const{removeCard} = CradSlice.actions;
export default CradSlice.reducer;