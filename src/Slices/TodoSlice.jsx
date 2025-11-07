  import { createSlice } from "@reduxjs/toolkit";

  
  const todoSlice = createSlice({
    
    name: "todo",
    initialState: {
      todoList:[],
      filterStatus:"all",
    },
    reducers: {
      addFunction: (state, action) => {
        state.todoList.push({...action.payload,completed:false})
      },

      deleteFunction:(state,action)=>{
       state.todoList=state.todoList.filter((todo)=> todo.id !=action.payload);

      },
      toggleComplete:(state,action)=>{
        const todo=state.todoList.find((todo)=> todo.id ==action.payload);

        if(todo){
          todo.completed=!todo.completed;
        }
      },

      updateFilterStatus:(state,action)=>{
        state.filterStatus=action.payload;
      }
    },
  });

  export const { addFunction,deleteFunction,updateFilterStatus,toggleComplete} = todoSlice.actions;
  export default todoSlice.reducer;
