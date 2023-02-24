import Image from 'next/image'
import React from 'react'

const BrandBar = () => {
  return (
    <>
        <div>
            <div className=''>
                <div className='brandspacing'>
                    <Image className='imgboxs' src={'/./images/brand1.png'} height='40' width={'120'} alt='' />
                    <Image className='imgboxs' src={'/./images/brand2.png'} height='40' width={'120'} alt='' />
                    <Image className='imgboxs' src={'/./images/brand3.png'} height='40' width={'120'} alt='' />
                    <Image className='imgboxs' src={'/./images/brand4.png'} height='40' width={'120'} alt='' />
                    <Image className='imgboxs' src={'/./images/brand5.png'} height='40' width={'120'} alt='' />
                </div>
            </div>
        </div>
    </>
  )
}

export default BrandBar