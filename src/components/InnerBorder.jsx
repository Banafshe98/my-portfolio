import React from 'react'

function InnerBorder(props) {
  return (
    <div className=' bg-neutral-300 rounded-4xl w-screen-md '>{props.children}</div>
  )
}

export default InnerBorder