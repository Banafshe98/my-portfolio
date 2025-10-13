import React from 'react'

function Layout(props) {
  return (
    <div className='p-5 bg-black w-screen min-h-screen'>
      <div className='w-screen-xl'>{props.children}</div>
      </div>
  )
}

export default Layout