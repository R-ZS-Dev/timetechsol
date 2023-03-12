import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/MeetExpertTeam.module.css'

function MeetExpertTeamTile(props) {
    return (
        <div className={style.cardrec}>
            <Image className={style.crdicnrec} src={props.image} alt={props.position + ' ' + props.name} height={'200'} width={'200'} />
            <div className={style.containerrec}>
                <h3>{props.name}</h3>
                <label className={style.analyst}>{props.position}</label>
                <div className={style.mrtp}>
                    {props.fbLink != "" &&
                        <Link href={props.fbLink} target="_blank"><Image className={style.icnp} src={"/images/fb.png"} height="20" width={'20'} alt='' ></Image></Link>
                    }
                    {props.twLink != "" &&
                        <Link href={props.twLink} target="_blank"><Image className={style.icnp} src={"/images/tw.png"} height="20" width={'20'} alt='' ></Image></Link>
                    }
                    {props.lnLink != "" &&
                        <Link href={props.lnLink} target="_blank"><Image className={style.icnp} src={"/images/ln.png"} height="20" width={'20'} alt='' ></Image></Link>
                    }
                    {props.pnLink != "" &&
                        <Link href={props.pnLink} target="_blank"><Image className={style.icnp} src={"/images/pn.png"} height="20" width={'20'} alt='' ></Image></Link>
                    }

                </div>
                <div className={style.bottompadd}></div>
            </div>
        </div>
    );
}

export default MeetExpertTeamTile;