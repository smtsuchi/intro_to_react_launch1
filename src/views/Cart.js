import React, { Component } from 'react'

export default class Cart extends Component {

    getQuantity = (cartItem, cartList) => {
        let count = 0;
        for (let item of cartList){
            if (cartItem.id === item.id ){
                count++;
            }
        }
        return count
    }

    getUniqueCart = (cart) => {
        let uniqueCart = [];
        let ids = new Set();
        for (let item of cart){
            if (!ids.has(item.id)){
                uniqueCart.push(item);
                ids.add(item.id);
            }
        }
        return uniqueCart
    }

    render() {
        return (
            <>
            {this.props.cart.length > 0 ? (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getUniqueCart(this.props.cart).map(p=>(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.product_name}</td>
                                <td>{this.getQuantity(p, this.props.cart)}</td>
                                <td>${p.price}</td>
                                <td>${(this.getQuantity(p, this.props.cart) * p.price).toFixed(2)}</td>
                                <td>
                                    <button onClick={()=>this.props.removeFromCart(p)} className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
            </div>
        ) : (
            <div className="container">
                <h1>Your cart is empty</h1>
            </div>
        
        )}
                
        </>
        )
    }
}
