/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

import dbConnect from '../../models';

import { ProductCardProps } from '../../models/types';
import productSchema from '../../models/productSchema';

import ProductPerPage from '../../Components/ProductPerPage/ProductPerPage';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


export default function productID(props: ProductCardProps) {
  const { data } = props;


  return (
    <>
      <Header />
      <ProductPerPage data={data}></ProductPerPage>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: any) {
  await dbConnect();
  const { productid } = context.params;


  const res = await productSchema.findById(productid);
  const tempArr = [];
  tempArr.push(res);

  const product = tempArr.map((doc) => {
    const i = doc.toObject();
    i._id = i._id.toString();
    return i;
  });

  return { props: { data: product } };
}
