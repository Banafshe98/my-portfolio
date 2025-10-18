import React from 'react'
import Header from './Header'

function Layout(props) {
  return (
    <div className='p-5 bg-black w-screen min-h-screen'>
      <div className='w-screen-xl'>
        <Header/>
        
        {props.children}
        </div>
      </div>
  )
}

export default Layout