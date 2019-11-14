import React from 'react';
import {connect} from 'react-redux'



function sort(items) {
  return items.sort((a, b) => a.id - b.id)
}

function Cart(props) {
  return <table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    {
    sort(props.cart).map(item => <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>
          <button onClick={(evt) => props.addToCart(item)}>+</button>
        </td>
        <td>
          <button onClick={(evt) => props.removeFromCart(item)}>-</button>
        </td>
        <td>
          <button onClick={(evt) => props.removeAllFromCart(item)}>Remove All</button>
        </td>
      </tr>)
    }
  </tbody>

   </table>
}


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


//THOUGH WE DONT NEED THIS FUNCTION UNDERSTAND HOW IT WORKS.
// for reduce function the first argument is the function that you want to call
// for each iteration. (line 13-15) filter through the accumulator return items
// where the id is equivilent to the value of the item we are iterating through.

// the second argument is what the accumulator variable will start off as. In this
// case its an empty array (line 15)

// you start with an accumulator and an item through which were iterating.

/*
export const cartItemsWithQuantity = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
    filteredItem !== undefined ? filteredItem.quantity++ : acc.push({...item, quantity: 1,})
    return acc
  }, [])

}

*/
