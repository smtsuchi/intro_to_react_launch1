import React, { Component } from 'react'

export default class ProductDetail extends Component {
    constructor() {
        super();
        this.state = { product: {} }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/products/${this.props.my_match.params.id}`);
        const data = await res.json();
        console.log(data)
        this.setState({ product: data })
    }


    render() {
        const p = this.state.product
        return (
            <div className="container card col-12 col-lg-6 text-dark text-decoration-none mb-3">
                <h5 className="card-header">
                    <div>{p.product_name}</div>
                </h5>
                <img className="mx-auto w-50" src={p.image_url} alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{p.description}</h5>
                    <p className="card-text">${p.price}</p>
                    <button onClick={()=>this.props.addToCart(p)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        )
    }
}
