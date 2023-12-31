import React from 'react'
import Todo_Item from './Todo_Item'

export default function Todos(props) {
    return (
        <div className='container'>
            <h3 className='my-3'>Todos List</h3>

            {props.todos.length === 0 ? <p className='text-danger'>No Task to Display</p>:
                props.todos.map((todo) => {
                    return <Todo_Item todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}
        </div>
    )
}
