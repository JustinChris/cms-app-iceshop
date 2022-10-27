import React from 'react'
import style from './AboutUs.module.css'
import Link from 'next/link';
import Image from 'next/image';
import landingImage from '../../public/Assets/2.png';


export default function AboutUs() {
  return (
    <>
        <div className={style.background}>
        <h1 className={style.aboutUsTitle}>About Us</h1>
        <div className={style.aboutUs}>
          <div className={style.aboutusContent}>
            <p>We are serving the best ice cream in the world through online order and reach everyone who enjoy ice cream as much as we do</p>
            <p>Our ice cream made with the best ingredients picked selectively by our senior Italian ice cream maker</p><br />
            <b>The Best Ice Cream In the World</b><br /> <br />
            <div className={style.browseProductBg}>
              <Link href="/products"><a className={style.browseProduct}>Browse Products</a></Link>
            </div>
          </div>
          <div className={style.aboutusImage}>
            <Image src={landingImage} alt="ice cream"/>
          </div>
        </div>
      </div>
    </>
  )
}
