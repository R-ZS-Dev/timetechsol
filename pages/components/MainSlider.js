import React from 'react'
import style from '@/styles/MainSlider.module.css'

const MainSlider = () => {
    return (
        <>
        <div className={style.bgphoto}>
            <div className={style.content}>
                <p className={style.toppadd}>Transforming Your Business with Next-Generation Tech</p>
                <h3>Web Development services </h3>

                <div className={style.mtextsize}>We help ambitious companies like yours to build</div>
                <div className={style.mtextsize}>best in class products. Our approach delivers more value, faster.</div>

                <button className={style.btn}>Read More
                    <div className={style.rightarrow}>
                        <label htmlFor='' className={style.rightarr}>
                            <label htmlFor='' className={style.right}></label>
                        </label>
                    </div>
                </button>
            </div>
        </div>
        </>
    )
}

export default MainSlider