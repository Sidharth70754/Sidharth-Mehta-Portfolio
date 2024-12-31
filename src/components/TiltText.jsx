import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc}className='mt-40'>
        <h1 className='text-[4.2vw] leading-[4vw]uppercase font-[anzo1]'>I AM <span className='text-black font-[anzo1]'>SIDHARTH MEHTA</span></h1>
        <h1 className='text-[8.2vw] leading-[7vw] font-[anzo5]'>FULL STACK</h1>
        <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo5]'>DEVELOPER</h1>
    </div>
  )
}

export default TiltText