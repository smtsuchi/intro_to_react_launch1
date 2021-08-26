import React, { Component } from 'react'

export default class UpdatePost extends Component {

    updatePost = async (event) => {
        event.preventDefault();
        const res = await fetch(`http://127.0.0.1:8000/api/posts/update/${this.props.my_match.params.id}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": event.target.title.value,
                "content": event.target.content.value,
                "author": 1
            })// Currently hard coded to person 1, but when we add Login Auth, we will change this
        })
        const data = await res.json()
        console.log(data)
    }

    render() {
        return (
            <form onSubmit={this.updatePost} className="container border">
                <h1>Update Post</h1>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Content</label>
                    <textarea className="form-control" name="content" rows="3"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
