import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './views/About';
import Blog from './views/Blog';
import Cart from './views/Cart';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import News from './views/News';
import PostDetail from './views/PostDetail';
import ProductDetail from './views/ProductDetail';
import Register from './views/Register';
import Shop from './views/Shop';
import Student from './views/Student';
import UpdatePost from './views/UpdatePost';


export default class App extends Component {
  constructor() {
    super();
    const user = localStorage.getItem('user');
    if (user) {
      const foundUser = JSON.parse(user);
      this.state = {
        cart: [],
        isLoggedIn: true,
        user: foundUser,
      }
    }
    else {
      this.state = {
        cart: [],
        isLoggedIn: false,
        user: null,
      }
    }
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password1.value
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "password":password
        })
    })
    const data = await res.json();
    const user = {
      token: data.token,
      username,
    }
    this.setState({
      isLoggedIn: true,
      user,
    })
    localStorage.setItem('user', JSON.stringify(user))
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    this.setState({
      isLoggedIn: false,
      user: null
    })
  }

  
  addToCart = (product) => {
    this.setState({
      cart: this.state.cart.concat(product)
    })
  }
  removeFromCart(product){
    let newCart = [...this.state.cart]
    for (let i = newCart.length-1; i>=0; i--){
      if (product.id === newCart[i].id){
        newCart.splice(i,1);
        break;
      }
    }
    this.setState({cart: newCart})
  }
  sumTotalCart = (cartList) => {
    let total = 0;
    for (let item of cartList){
      total += parseFloat(item.price)
    }
    return total.toFixed(2)
  }

  render() {
    return (
      <div>
        <Nav isLoggedIn={this.state.isLoggedIn} cart={this.state.cart} sumTotalCart={this.sumTotalCart} handleLogout={this.handleLogout}/>

        <div className="container justify-content-center">
          <Switch>
            <Route exact path='/' render={() => <Home/> }/>
            <Route exact path='/about' render={() => <About name={this.state.name} my_company={this.state.company}/> }/>
            <Route exact path='/shop' render={() => <Shop addToCart={this.addToCart}/> }/>
            <Route exact path='/shop/:id' render={({match}) => <ProductDetail my_match={match} addToCart={this.addToCart}/> }/>
            <Route exact path='/cart' render={() => <Cart removeFromCart={this.removeFromCart} sumTotalCart={this.sumTotalCart} cart={this.state.cart}/> }/>
            {
              this.state.isLoggedIn ?
              <>
              <Route exact path='/news' render={() => <News/> }/>
              <Route exact path='/students' render={() => <Student/> }/>
              <Route exact path='/blog/posts/create' render={() => <CreatePost /> }/>
              <Route exact path='/blog' render={() => <Blog/> }/>
              <Route exact path='/blog/:id' render={({match}) => <PostDetail my_match={match}/> }/>
              <Route exact path='/blog/update/:id' render={({match}) => <UpdatePost my_match={match}/> }/>
              </>
              :
              <>
              <Route exact path='/register' render={() => <Register/> }/>
              <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin}/> }/>
              </>
            }
              
          </Switch>
        </div>


      </div>
    )
  }
}
