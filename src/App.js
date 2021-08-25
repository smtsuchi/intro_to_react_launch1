import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './views/About';
import Blog from './views/Blog';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import News from './views/News';
import PostDetail from './views/PostDetail';
import Student from './views/Student';
import UpdatePost from './views/UpdatePost';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shoha Tsuchida",
      company: "Coding Summit"
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>Hello World </h1>
        <h3>The User is {this.state.name}</h3>




        <Switch>
          <Route exact path='/' render={() => <Home/> }/>
          <Route exact path='/about' render={() => <About name={this.state.name} my_company={this.state.company}/> }/>
          <Route exact path='/news' render={() => <News/> }/>
          <Route exact path='/students' render={() => <Student/> }/>
          <Route exact path='/blog' render={() => <Blog/> }/>
          <Route exact path='/blog/create' render={() => <CreatePost /> }/>
          <Route exact path='/blog/:id' render={({match}) => <PostDetail my_match={match}/> }/>
          <Route exact path='/blog/update/:id' render={({match}) => <UpdatePost my_match={match}/> }/>
        </Switch>


      </div>
    )
  }
}
