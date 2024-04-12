import React from 'react'

function Bgscreen() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
    <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">
      Document
    </div>
    <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] tracking-tighter leading-none font-semibold text-zinc-950">
      Docs
    </h1>
    </div>
  )
}

export default Bgscreen
