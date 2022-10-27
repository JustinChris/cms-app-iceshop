import React from 'react'
import style from './Desc.module.css';
import Image from 'next/image';

import decor1 from '../../public/Assets/chocolate_tub@2x.png';
import decor2 from '../../public/Assets/ice_cream_basket@2x.png';
import Link from 'next/link';

export default function Desc() {
  return (
    <>
        <div className={style.background}>
                
            <div className={style.desc}>
              <div className={style.imagedecor1}>
                <Image src={decor1} width={250} height={250} alt="ice cream"/>
              </div>
              <div className={style.imagedecor2}>
                <Image src={decor2} width={300} height={300} alt="ice cream"/>
              </div>
              <h1 className={style.headline}>Delicious ice cream, made from fresh pasteurized milk</h1>
              <p className={style.content}>
                A long time ago, we build a barn collecting milk selling them and take care of our cows, with a little push we think of a way to deliver
                our products through making ice cream. We soon converted our barn to produce milk and set up a homemade ice cream maker; this ice cream 
                is for everyone who loves to enjoy ice creams in their taste and creamy texture.
              </p> <br />
              <b className={style.content}>Contact Us Now!</b>
              <br /> <br /> <br />
              <div className={style.browseProductBg}>
                <Link href="/contact"><a className={style.browseProduct}>Contact Us</a></Link>
              </div>

            </div>
        </div>
    </>
  )
}
