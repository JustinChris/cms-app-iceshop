import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './ProductCards.module.css';

import { ProductCardProps } from '../../models/types';

export default function ProductCards({ data }: ProductCardProps) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
        <div className={style.container}>
            <Image src={data.img} alt="product" width={200} height={200}/>
            <div>
                {data.status == "Ready" ?
                      (
                      <div className={style.ready}>Ready</div>
                    ) :
                    (
                      <div className={style.unavailable}>Unavailable</div>
                    )
                }

                <h2 className={style.dataName}>{data.name}</h2>
                <p className={style.dataPrice}>{formatter.format(data.price)}</p>
                <div className={style.btn_redirect}>
                  {data.status == "Ready" ?
                        (
                          <Link href="/products/[productid]" as={`/products/${data._id}`}><a className={style.btn_redirect}>Redirect</a></Link>
                      ) :
                      (
                        <a className={style.btn_redirect} aria-disabled="true">Redirect</a>
                      )
                  }
                </div>
            </div>
        </div>
    </>
  )
}
