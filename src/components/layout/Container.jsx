import React from 'react'
// import { Children } from 'react'

function Container({children}) {
  return (
    <div className='px-[15px] md:px-0 md:w-[1140px] mx-auto'>
        {children}
    </div>
  )
}

export default Container