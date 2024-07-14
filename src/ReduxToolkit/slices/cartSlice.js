import { createSlice } from "@reduxjs/toolkit";


export const cart =  createSlice({
    initialState :[],
    name:"cartSlice",
    reducers:{
        addToCart:(state , action)=>{
            let founded = state.find((product)=> product.id === action.payload.id)  ;
            if(founded){
             founded.count++ 
            }  else{
              state.push({...action.payload , count:1})
            }
        },
        deleteCart:(state , action)=>{
            return state.map(product => {
                if (product.id === action.payload.id) {
                  if (product.count > 1) {
                    return { ...product, count: product.count - 1 };
                  }else{
                   return state.filter((product) => product.id !== action.payload.id)
                }
                }
                return product ;
              }).filter(product => product.count > 0 );
              
        },
        deleteAllCart:(state , action)=>{
          return state = []  
        },
        checkout:(state , action)=>{
          return action.payload
        }
    }
})

export const {addToCart , deleteAllCart , deleteCart , checkout} = cart.actions;
export default cart.reducer;