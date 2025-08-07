import React, { useState } from 'react'

function App() {
  const [color , setColor] =useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          {/* //buttonstart */}
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "red"}}>
            Red
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button
          onClick={() => setColor("green")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "green"}}>
            green
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button
          onClick={() => setColor("blue")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "blue"}}>
            blue
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button 
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "pink"}}>
            pink
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button
          onClick={() => setColor("grey")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "grey"}}>
            grey
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button
          onClick={() => setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "orange"}}>
            orange
          </button>
          {/* //buttonover */}
          {/* //buttonstart */}
          <button
          onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor : "purple"}}>
            purple
          </button>
          {/* //buttonover */}
          
        </div>
      </div>
    </div>
  )
}

export default App
