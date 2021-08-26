import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="fas fa-home"></i></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/news"><i className="fas fa-newspaper"></i></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/students">Students</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog"><i className="fas fa-square-full"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop"><i className="fas fa-store"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><i className="fas fa-cart-plus"></i> {this.props.cart.length}|{this.props.sumTotalCart(this.props.cart)}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
