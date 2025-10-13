import React from 'react'

function InnerBorder(props) {
  return (
    <div className=' bg-neutral-300 rounded-4xl w-full min-h-screen overflow-y-auto flex flex-col '>{props.children}</div>
  )
}

export default InnerBorder