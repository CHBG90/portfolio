import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice ({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const index = state.findIndex((findId)=> findId.id === action.payload.id)
            if(index > -1){
                state[index].count++;
            }else{
                state.push(action.payload);
            }
        },
        deleteItem(state, action) {
            const index = state.findIndex((findId)=> findId.id === action.payload.id)
            state.splice(index, 1);
        },
        addCount(state, action) {
            const index = state.findIndex((findId)=> findId.id === action.payload.id)
              if (index !== -1) {
                state[index].count++;
            }
        },
        minusCount(state, action) {
            const index = state.findIndex((findId)=> findId.id === action.payload.id)
            if(state[index].count > 1) {
            if (index !== -1 && state[index].count > 1) {
                state[index].count--;
            }
            }
        },
        
    }
})

export const { addItem, deleteItem, addCount, minusCount } = cart.actions;

const store = configureStore({
    reducer: {
        cart: cart.reducer,
    },
});

export default store;