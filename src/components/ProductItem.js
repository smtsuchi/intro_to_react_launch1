import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        const p = this.props.product
        return (
            <div className="card col-12 col-lg-4 col-md-6 text-dark text-decoration-none">
                <Link to={`/shop/${p.id}`} className="text-decoration-none card-header text-dark"><h5>{p.product_name}</h5></Link>
                <img src={p.image_url} alt="product"/>
                <div className="card-body">
                    <h5 className="card-title sidebar-box">{p.description}</h5>
                    <p className="card-text">${p.price}</p>
                    <button onClick={()=>this.props.addToCart(p)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        )
    }
}
