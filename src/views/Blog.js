import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

export default class Blog extends Component {
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    componentDidMount = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/posts/");
        const data = await res.json();
        console.log(data)
        this.setState({posts: data})
    }

    render() {
        return (
            <>
            <div className="d-flex my-2">
                <Link to="/blog/posts/create" className="text-dark mx-auto py-2 px-4"><i class="fas fa-plus"></i></Link>
            </div>
            {this.state.posts.map((p, i)=> <BlogPost post={p} key={i} />)}
            </>
        )
    }
}
