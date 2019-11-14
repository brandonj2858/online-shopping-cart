import React from 'react';

export default function ProductListItem(props) {
  return <div className="product-list-item">
    <h4 className='sneaker-title'>{props.product.name}</h4>
    <img
    height={100}
    title={props.product.name}
    src={props.product.image}
    />

    <br/>
    <div>Price: ${props.product.price}</div>
    <br/>
    <button onClick={(evt) => {props.addToCart(props.product)}}>Add to Cart ({
      (props.cartItem && props.cartItem.quantity) || 0})</button>
    { props.cartItem ?
      <button onClick={(evt) => {props.removeFromCart(props.cartItem)}}>Remove from Cart</button> : null}
  </div>
 }
