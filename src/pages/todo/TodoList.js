import React from 'react'

export const TodoList = ({todos}) => {
    return (
        <>
            <div className='col-md-5 list-div bl-s'>
                <p className='task-list-heading'>Todos Task</p>
                <ul className='list-disc list-inside'>
                    {todos.map((todo,index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
