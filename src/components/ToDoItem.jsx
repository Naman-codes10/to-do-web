import ToDoItems from './ToDoItems'
const ToDoItem = ({ todoItems, onDeleteClick }) => {
    return <>
        {todoItems.map(items =>
            <ToDoItems
            key={items.name}
                todoDate={items.dueDate} todoName={items.name} onDeleteClick={onDeleteClick}
            ></ToDoItems>)}
    </>
}
export default ToDoItem;