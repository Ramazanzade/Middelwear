import { configureStore } from "@reduxjs/toolkit";
 import TodoSlice from "./TodoSlice";
const store = configureStore({
    reducer: {
        useSelector: TodoSlice,
      },  })



  export default store