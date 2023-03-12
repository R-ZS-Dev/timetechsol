import Image from "next/image"
import Link from "next/link"
import style from "@/styles/Portfolio.module.css"

function PortfolioTile(props) {
    return (
        <div className={style.card1}>
            <Image className={style.crdicn1} src={props.image} alt="" height={'250'} width={'373'} />
            <div className={style.container}>
                <h3><b className={style.txtsocial11}>{props.name}</b></h3>
                <p className={style.txtsocial1}>{props.detail}</p>
            </div>
            <div className={style.readmore11}>
                <Link className={style.readamor1} href={props.link} target="_blank"> <strong>View Link</strong>
                    {/* <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div> */}
                </Link>
            </div>
            <div className={style.bottompadd1}></div>
            <div className={style.bluelinebt}></div>
        </div>
    );
}

export default PortfolioTile;