
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState ={
    products:[]
}


export const TodoSlice = createSlice ({
    name:"todo",
    initialState:initialState ,
    reducers:{
        addproduct: (state , action)=>{
                state.products.push(action.payload);        },

        deleteproduct :(state,action)=>{
            return state.products = state.products.filter(q => q.id != action.payload.id);
// return  state.filter((item)=> item.id !== action.payload.id)
       
}
    }
});


// export const AddProduct = (data) => {
//     return (dispatch) => {

//         return axios.post('https://northwind.vercel.app/api/products', data)
//             .then(res => {
//                 dispatch(addproduct(res.data))
//             })

//     }
// }
export const  { deleteproduct, addproduct} = TodoSlice.actions;
export default TodoSlice.reducer