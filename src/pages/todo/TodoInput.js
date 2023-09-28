import React from 'react'

export const TodoInput = ({todo,setTodo,addTodo}) => {
    return (
        <>
            <div className='col-md-7 input-div'>
                <div className='todo-input'>
                    <label htmlFor="todoinput" className="form-label">Add Todo Task</label>
                    <input type='text' onChange={e => setTodo(e.target.value)} className="form-control" id="todoinput" placeholder='Add Todo here' value={todo} />
                    <button id='task-add' onClick={addTodo} type="button" className="btn btn-primary task-action-btn task-add">Add</button>
                </div>
            </div>
        </>
    )
}
