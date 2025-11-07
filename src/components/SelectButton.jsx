import React from 'react'

const SelectButton = ({value,onChange,children}) => {
  return (
    <select value={value} onChange={onChange}>
        {children}  
    </select>
  )
}

export default SelectButton