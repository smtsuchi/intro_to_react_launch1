import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        const p = this.props.product
        return (
            <div className="card col-12 col-lg-4 col-md-6 text-dark text-decoration-none">
                <h5 className="card-header">
                    <Link to={`/shop/${p.id}`}>{p.product_name}</Link>
                </h5>
                <img src={p.image_url} alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{p.description}</h5>
                    <p className="card-text">${p.price}</p>
                    <button onClick={()=>this.props.addToCart(p)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        )
    }
}
