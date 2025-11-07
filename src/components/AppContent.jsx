import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { addFunction, deleteFunction, updateFilterStatus } from "../Slices/TodoSlice";
import Modal from "./Modal";
import SelectButton from "./SelectButton";

const AppContent = () => {
  const dispatch = useDispatch();
  const {todoList,filterStatus} = useSelector((state) => state.todo);
  const [showModel, setShowModel] = useState(false);
  //  const filterStatus=useSelector((state) => state.todo.filterStatus);


  const addHandle = () => {
    setShowModel(true);
  };

  const onDelete = (id) => {
    dispatch(deleteFunction(id));
  };

  const onModalSubmit = (newTodo) => {
    dispatch(addFunction(newTodo));
  };

  const updateFilter=(e)=>{
   dispatch(updateFilterStatus(e.target.value));
  }

   const filteredTodos = todoList.filter((todo) => {
    if (filterStatus === "complete") return todo.completed;
    if (filterStatus === "incomplete") return !todo.completed;
    return true; // "all"
  });   



  return (
    <>
      <div className="box">
        <div className="add">
          <IoIosAddCircle onClick={addHandle} />
          <SelectButton value={filterStatus} onChange={updateFilter}>
            <option value='all'>All</option>
            <option value='complete'>Complete</option>
            <option value='incomplete'>Incomplete</option>
          </SelectButton>
        </div>
      </div>
      <Items todos={filteredTodos} remove={onDelete} />

      {showModel && (
        <Modal onClose={() => setShowModel(false)} onSubmit={onModalSubmit} />
      )}
    </>
  );
};

export default AppContent;
