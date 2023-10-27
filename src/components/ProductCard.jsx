import React from 'react';

let cartArray = []; // array which contains all the products which are present in the cart

const ProductCard = ({productCategory}) => {

    // this function adds the product to the cart array and log into the conole (all products present in the cart) as mentioned in the task document
    const addToCart = (productName, productPrice) => {
        console.log("Product added to the cart");
        cartArray.push({"Name":productName, "Price":productPrice}); // this will add the product into the cart
        console.log(cartArray);
    }

    // this function removes the product from the cart array and log into the conole (all products present in the cart) as mentioned in the task document
    const removeFromCart = (productName, productPrice) => {
        cartArray.forEach((product, idx) => {
            if(product.Name===productName && product.Price===productPrice) { // this condition will check for the same product to remove on which the button is clicked
                cartArray.splice(idx, 1); // this will remove that selected product from the cart
                console.log("Product removed from the cart");
                console.log(cartArray);
            }
        })
    }

  return (
    <>
        {
            // It will iterate over the each category and render all the products of that category
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
