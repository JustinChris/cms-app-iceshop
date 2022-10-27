/* eslint-disable react/jsx-key */

import dbConnect from '../../models'
import productSchema from '../../models/productSchema';
import Head from 'next/head';

import { ProductsProps } from '../../models/types';

import style from '../../styles/Product.module.css'

import Header from '../../Components/Header/Header';
import ProductCards from '../../Components/ProductCards/ProductCards';
import Footer from '../../Components/Footer/Footer';

export default function index(props: ProductsProps) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Ice Cream Shop | Products</title>
      </Head>
      <div className={style.backgroundstuff}>
        <Header />
        <h1 className={style.productListTitle}>Products</h1>
        <div className={style.layouting}>
          {products.map((product) => {
            return(
              <ProductCards data={product}/>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const res = await productSchema.find({});
  const product = res.map((doc) => {
      const i = doc.toObject();
      i._id = i._id.toString();
      return i;
  });
  console.log(product);
  return { props: { products: product } };
}