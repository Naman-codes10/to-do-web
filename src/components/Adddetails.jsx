import React, { useRef, useState } from 'react'
import { MdAddBox } from "react-icons/md";

export default function Adddetails({ onNewItem }) {


    //const NoOfUpdates = useRef(0);
    const TodoNameElement = useRef();
    const TodoDateElement = useRef();

    const handleAddButton = (event) => {
        event.preventDefault();
        const todoName = TodoNameElement.current.value;
        const todoDate = TodoDateElement.current.value;    
        TodoNameElement.current.value = "";
        TodoDateElement.current.value = "";
        onNewItem(todoName, todoDate);
        

    }


    return (
        <div>
            <div className="container text-center">
                <div className="row Mrow">
                    <div className="col-6">
                        <input type="text"
                            ref={TodoNameElement}
                            placeholder="Enter ToDo Here"
                            />
                    </div>
                    <div className="col-2">
                        <input type="date"
                            ref={TodoDateElement}
                        />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-success Mbutton" onClick={handleAddButton}
                        >
                            <MdAddBox />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
