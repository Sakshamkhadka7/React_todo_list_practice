import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleComplete } from  "../Slices/TodoSlice";

const Items = ({ todos,remove }) => {
  
  const dispatch=useDispatch();


  const handleCheck=(id)=>{
       dispatch(toggleComplete(id))
  }
  


  return (
    <div>
      <ul className="items">
        {todos.map((todo, index) => (
          <li key={index} style={{
            textDecoration:todo.completed ?'line-through':'none'
          }}>
            <input type="checkbox" checked={todo.completed} onChange={()=>handleCheck(todo.id)} />
            {todo.text}
            <div className="date-and-action">
             <span className="due-date">{todo.due}</span>
            <FaDeleteLeft onClick={()=> remove(todo.id)} style={{ marginLeft: "10px", color: "red", cursor: "pointer" }} />
        
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
