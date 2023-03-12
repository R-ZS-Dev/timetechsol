import Link from 'next/link'
import React, { useState } from 'react'
import style from '@/styles/PricePlan.module.css'

function PricePlanTile(props) {
    return (
        <div className={style.cardprc}>
            <div className={style.pkgcol}>
                <p>{props.name} Plan</p>
                <h1><b>${props.price}</b></h1>
            </div>
            <div>
                {props.packageServices.map((ps, i) => (
                    <p className={style.txtsocialprc} key={i}>{ps}</p>
                ))}
            </div>
            <div className={style.buybtnm}>
                <Link className={style.readamorprc} href={'mailto:timetechsolution@gmail.com'}> <strong>Contact Us</strong>
                    {/* <div className={style.rightarrowprc}>
                                <label htmlFor='' className={style.rightarrprc} >
                                    <label htmlFor='' className={style.rightprc}></label>
                                </label>
                            </div> */}
                </Link>
            </div>
            <div className={style.bottompaddprc}></div>
        </div>
    );
}

export default PricePlanTile;