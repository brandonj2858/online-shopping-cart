import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';

export default function HomePage(props) {
  return <div>
    <h1 className='page-title' > HomePage</h1>
    <ProductListing products={data.products}/>
   </div>
}
