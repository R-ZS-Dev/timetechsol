import Image from 'next/image'
import React from 'react'
import style from '@/styles/BrandBar.module.css'

const BrandBar = () => {
  return (
    <>
        <div>
            <div className=''>
                <div className={style.brandspacing}>
                    <Image className={style.imgboxs} src={'/images/brand1.png'} height='40' width={'120'} alt='' />
                    <Image className={style.imgboxs} src={'/images/brand2.png'} height='40' width={'120'} alt='' />
                    <Image className={style.imgboxs} src={'/images/brand3.png'} height='40' width={'120'} alt='' />
                    <Image className={style.imgboxs} src={'/images/brand4.png'} height='40' width={'120'} alt='' />
                    <Image className={style.imgboxs} src={'/images/brand5.png'} height='40' width={'120'} alt='' />
                </div>
            </div>
        </div>
    </>
  )
}

export default BrandBar