import Image from 'next/image'
import React from 'react'
import style from '@/styles/OurServices.module.css'

function OurServicesTile(props) {
    return (
        <div className={style.card}>
            <Image className={style.crdicn} src={props.image} alt="" height={'50'} width={'80'} />
            <div className={style.container}>
                <h3><b>{props.name}</b></h3>
                <p className={style.txtsocial}>{props.detail}</p>
            </div>
            {/* <div>
                <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                    <div className={style.rightarrow}>
                        <label htmlFor='' className={style.rightarr}>
                            <label htmlFor='' className={style.right}></label>
                        </label>
                    </div>
                </Link>
            </div> */}
            <div className={style.bottompadd}></div>
        </div>
    );
}

export default OurServicesTile;