import React from 'react';
import ProductCard from './ProductCard';
import productData from '../productData.json';

const Category = () => {
  return (
    <div className='category-container'>
      {
        // It will iterate over the JSON data and render the categories contaning all the products
        productData.data.map((productCategory) => (
            <div className='product-category' key={productCategory.categoryId}>
                <h3>{productCategory.name}</h3>
                <div className='inside-div'>
                    <ProductCard productCategory={productCategory} />
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Category
