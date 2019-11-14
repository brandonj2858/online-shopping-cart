import React from 'react';
import Cart from '../features/cart';
import {connect} from 'react-redux'


function CartPage(props) {
  return ( <div >
      <h1 className='page-title'>CartPage</h1>
      {props.cart.length === 0 ? <h3 >Your Cart is Empty!</h3> : <Cart products={props.products}/> }

    </div>

  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartPage)
