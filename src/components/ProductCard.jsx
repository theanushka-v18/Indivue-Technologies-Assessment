import React from 'react';

let cartArray = [];

const ProductCard = ({productCategory}) => {

    const addToCart = (productName, productPrice) => {
        console.log("Product added to the cart");
        cartArray.push({"Name":productName, "Price":productPrice});
        console.log(cartArray);
    }

    const removeFromCart = (productName, productPrice) => {
        cartArray.forEach((product, idx) => {
            if(product.Name===productName && product.Price===productPrice) {
                cartArray.splice(idx, 1);
                console.log("Product removed from the cart");
                console.log(cartArray);
            }
        })
    }

  return (
    <>
        {
            productCategory.productList.map((product) => (
                <div className='product-card' key={product.productId}>
                    <p>Name : {product.name}</p>
                    <p>Price : {product.price}</p>
                    <div className='button-container'>
                        <button onClick={() => addToCart(product.name, product.price)}>Add to the cart</button>
                        <button onClick={() => removeFromCart(product.name, product.price)}>Remove from cart</button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ProductCard;
