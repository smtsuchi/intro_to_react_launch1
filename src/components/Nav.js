import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Hello, {this.props.user?this.props.user.username:"Guest"}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarNav">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="px-5 fas fa-home"></i></Link>
                            </li>

                            {
                                this.props.isLoggedIn ?
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news"><i className="px-5 fas fa-newspaper"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog"><i className="px-5 fas fa-square-full"></i></Link>
                                </li>
                                </>
                                :
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                </>
                            }

                            <li className="nav-item">
                                <Link className="nav-link" to="/shop"><i className="px-5 fas fa-store"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><i className="px-5 fas fa-cart-plus"></i>{this.props.cart.length} | ${this.props.sumTotalCart(this.props.cart)}</Link>
                            </li>
                            {
                                this.props.isLoggedIn ?
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>this.props.handleLogout()} to="/">Log Out</Link>
                                </li>
                                :
                                null
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
