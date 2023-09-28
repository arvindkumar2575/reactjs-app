import React from 'react'

export const TodoList = ({todos}) => {
    return (
        <>
            <div className='col-md-5 list-div bl-s'>
                <p className='task-list-heading'>Todo Task List</p>
                <ul>
                    {todos.map((todo,index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
