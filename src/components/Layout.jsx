import React from 'react'

function Layout(props) {
  return (
    <div className='p-5 bg-black w-full min-h-screen'>
      <div className='max-w-screen-xl'>{props.children}</div>
      </div>
  )
}

export default Layout
