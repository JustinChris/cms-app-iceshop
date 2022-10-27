import React, { useState } from 'react'
import { ProductCardProps } from '../../models/types'
import style from './ProductPerPage.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function ProductPerPage({data} : ProductCardProps) {
  const singleData = data[0];

  const orderMax = 20;
  const orderMin = 1;
  
  const [qty, setQty] = useState(1);

  const HandleIncrement = () => {
    if (qty >= orderMax) {
      setQty(orderMax);
    }else{
      setQty(qty + 1);
    }
  }

  const HandleDecrement = () => {
    if (qty <= orderMin) {
      setQty(orderMin);
    }else{
      setQty(qty - 1);
    }
  }

  var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
      <Head>
        <title>Ice Cream Shop | {singleData.name}</title>
      </Head>
      <section className={style.layout}>
        <section className={style.section}>
          <Image src={singleData.img} alt="products" width={1400} height={1400}/>
        </section>
        <aside className={style.aside}>
          <h1 className={style.productName}>{singleData.name}</h1>
          <br />
          <h2 className={style.price}>{formatter.format(singleData.price)}</h2>
          <br />
          <hr className={style.divider}/>
          <br />
          <div className={style.ratingandstatus}>
            {singleData.status == "Ready" ?
              (
                <div className={style.ready}>Ready</div>
              )
              :
              (
                <div className={style.unavailable}>Unavailable</div>
              )
            }
           <p className={style.rating}>{singleData.rating} &#9733;</p>
          </div>
          
          <div className={style.descriptionArea}>
            <p> {singleData.desc} </p>
            
          </div>
          <div className={style.formHandler}>
            <button onClick={HandleDecrement} className={style.btn_qty}>-</button>
            <div className={style.input_qty}>{qty}</div>
            <button onClick={HandleIncrement} className={style.btn_qty}>+</button>
          </div>
        </aside>
      </section>
    </>
  )
}
