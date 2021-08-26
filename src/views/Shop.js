import React, { Component } from 'react'
import ProductItem from '../components/ProductItem';

export default class Shop extends Component {
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }

    componentDidMount = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/products/");
        const data = await res.json();
        console.log(data)
        this.setState({products: data})
    }

    render() {
        return (
            <>
                <div className="row">
                    {this.state.products.map((p, i)=> <ProductItem addToCart={this.props.addToCart} product={p} key={i} />)}
                </div>
            </>
        )
    }
}
