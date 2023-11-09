import React from 'react'
import { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = () => {
    }
    return (
        <div className='container my-3 form-control card shadow-lg'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="task" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add</button>
            </form>
        </div>
    )
}
