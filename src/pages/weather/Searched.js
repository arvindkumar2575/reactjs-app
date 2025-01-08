import React from 'react'

export default function Searched({searched={}}) {
    console.log(searched)
  return (
    <>
    <div className='col-md-5 border-l-4 border-solid border-black'>
        {searched?"searched":"Not Searched Yet!"}
    </div>
    </>
  )
}
