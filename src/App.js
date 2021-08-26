import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './views/About';
import Blog from './views/Blog';
import Cart from './views/Cart';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import News from './views/News';
import PostDetail from './views/PostDetail';
import ProductDetail from './views/ProductDetail';
import Shop from './views/Shop';
import Student from './views/Student';
import UpdatePost from './views/UpdatePost';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    }
    this.removeFromCart = this.removeFromCart.bind(this)
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
        <Nav cart={this.state.cart} sumTotalCart={this.sumTotalCart}/>

        <div className="container justify-content-center">
          <Switch>
            <Route exact path='/' render={() => <Home/> }/>
            <Route exact path='/about' render={() => <About name={this.state.name} my_company={this.state.company}/> }/>
            <Route exact path='/news' render={() => <News/> }/>
            <Route exact path='/students' render={() => <Student/> }/>
            <Route exact path='/blog' render={() => <Blog/> }/>
            <Route exact path='/blog/create' render={() => <CreatePost /> }/>
            <Route exact path='/blog/:id' render={({match}) => <PostDetail my_match={match}/> }/>
            <Route exact path='/blog/update/:id' render={({match}) => <UpdatePost my_match={match}/> }/>
            <Route exact path='/shop' render={() => <Shop addToCart={this.addToCart}/> }/>
            <Route exact path='/shop/:id' render={({match}) => <ProductDetail my_match={match} addToCart={this.addToCart}/> }/>
            <Route exact path='/cart' render={() => <Cart removeFromCart={this.removeFromCart} sumTotalCart={this.sumTotalCart} cart={this.state.cart}/> }/>
          </Switch>
        </div>


      </div>
    )
  }
}
