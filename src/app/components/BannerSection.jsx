import Image from 'next/image'
import React from 'react'

const BannerSection = () => {
  return (
    <div className='m-10'>
        <div className="text-[30px] text-white font-bold">
            Hey 👋,
        </div>
        <Image src="/githubBanner.png" className="w-[850px]" width={500} height={500} alt="Banner" />
    </div>
  )
}

export default BannerSection