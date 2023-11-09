import React from 'react'

export default function Todo_Item(props) {
  return (
    <div className='container'>
      <h3>{props.todo.Task}</h3>
      <p>{props.todo.Description}</p>
      <button className="btn btn-danger btn-sm" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
