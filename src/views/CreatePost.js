import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreatePost extends Component {
    createPost = async (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorage.getItem('user')).token;
        const res = await fetch(`http://127.0.0.1:8000/api/posts/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify({
                "title": event.target.title.value,
                "content": event.target.content.value,
            })// Currently hard coded to person 1, but when we add Login Auth, we will change this
        })
        const data = await res.json()
        console.log(data)
    }
    render() {
        return (
        <>
        <div className="d-flex my-2">
                <Link to="/blog" className="text-dark mx-auto py-2 px-4"><i class="fas fa-arrow-left"></i></Link>
            </div>
        <form onSubmit={(e)=>this.createPost(e)} className="container border">
            <h1>Create Post</h1>
            <div className="mb-3">
                <label  className="form-label">Title</label>
                <input type="text" className="form-control" name="title" placeholder="Title" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Content</label>
                <textarea className="form-control" name="content" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        </>
        )
    }
}
