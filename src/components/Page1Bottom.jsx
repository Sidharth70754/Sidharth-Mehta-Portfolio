import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function() {
    gsap.to('#banner img', {
      rotate: 360,
      duration : 5,
      repeat: -1,
      ease: 'linear'
    })
  })


  return (
    <div className='absolute left-10 p-10 flex items-end justify-between bottom-0 w-full '>
        <div>
            <h2 className='text-2xl font-[anzo2]'>WEBSITE DESIGN | FREELANCER</h2>
            
        </div>
        <div id = 'banner'>
            <img className='mb-10'src="" alt="" />
            <img src="" alt="" />
        </div>

    </div>
  )
}

export default Page1Bottom