import React from 'react'
import style from '@/styles/MainSlider.module.css'

const MainSlider = () => {
    return (
        <>
        <div className={style.bgphoto}>
            <div className={style.content}>
                <p className={style.toppadd}>The Best Agency For Digital Marketing</p>
                <h3>Promote Your Website <br></br> With SEO Service</h3>
                <div className={style.mtextsize}>Good business leaders create articulate the vision, passionately</div>
                <div className={style.mtextsize}>vision and relentlessly drive it to completionrt working with an</div>
                <div className={style.mtextsize}>company that can provide everything.</div>

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