import React from 'react'

const layout = ({children}) :{
    children: React.ReactNode
}=> {
  return (
    <>
    <div className='border-b text-center font-bold text-3xl'>Login now to get 30% off</div>
    {children}
    </>
  )
}

export default layout     