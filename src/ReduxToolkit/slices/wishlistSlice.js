import { createSlice } from "@reduxjs/toolkit";


export const wishlist =  createSlice({
    initialState :[],
    name:"wishlistSlice",
    reducers:{
        deleteWishList:(state , action)=>{
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
        deleteAllWish:(state , action)=>{
          return state = []  
        },
        addToWish:(state , action)=>{
            let founded = state.find((product)=> product.id === action.payload.id)  ;
            if(founded){
             founded.count++ 
            }  else{
              state.push({...action.payload , count:1})
            }
        }
    }
})

export const {deleteAllWish , deleteWishList , addToWish} = wishlist.actions;
export default wishlist.reducer;