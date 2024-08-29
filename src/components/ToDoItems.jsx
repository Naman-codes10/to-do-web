import React from 'react'
import { MdDeleteForever } from "react-icons/md";


export default function ToDoItems({todoName,todoDate,onDeleteClick }) {
 
  return (
    <div>
      <div className="container">
      <div className="row Mrow">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger Mbutton" onClick={() => onDeleteClick(todoName)}>
            <MdDeleteForever />
            </button>
          </div>
        </div>
        </div>
    </div>
  )
}
