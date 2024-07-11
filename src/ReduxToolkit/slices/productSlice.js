import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("productSlice/fetchProduct" , 

    async ()=> {
     let Api = await fetch("shop.json");
     let finalApi = await Api.json();
    return finalApi    
    }
)
const initialState = {
    women: [],
    men: [],
    sneakers:[],
    watches: [],
};

export const productSlice = createSlice({
   initialState,
   name:"productSlice",
   reducers: {
    viewProduct: (state, action) => {
      const { id , nextImageIndex } = action.payload;
      const product = state.women.find((product) => product.id === id);
      if (product) {
        product.currentImageIndex = nextImageIndex;
        product.image = product.images[nextImageIndex];
      }
    },
    viewMenImages:(state,action)=>{
      const { id , nextImageIndex } = action.payload;
      const product = state.men.find((product) => product.id === id);
      if (product) {
        product.currentImageIndex = nextImageIndex;
        product.image = product.images[nextImageIndex];
      }
    },
    viewWatchesImg:(state , action)=>{
     const {id , nextImageIndex} = action.payload;
     const product = state.watches.find((product)=>product.id === id);
     if(product){
      product.currentImageIndex = nextImageIndex;
      product.image = product.images[nextImageIndex];
     } 
    }
  },
   extraReducers:(builder)=>{
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchProduct.fulfilled , (state , action)=>{
      state.women = action.payload.women.map((product) => ({
        ...product,
        images: [product.image, product.imageClick, product.imageClick2],
        currentImageIndex: 0,
      }));
        state.men = action.payload.men.map((product)=>({
        ...product , images:[product.image , product.imageClick , product.imageClick2],
        currentImageIndex:0  
        }));
        state.sneakers = action.payload.sneakers;
        state.watches = action.payload.watches.map((product)=>({
          ...product,images:[product.image , product.imageClick , product.imageClick2],
          currentImageIndex:0
        }));
    })
   } ,
})
export const {viewProduct , viewMenImages , viewWatchesImg } = productSlice.actions
export default productSlice.reducer;