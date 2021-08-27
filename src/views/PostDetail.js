import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class PostDetail extends Component {
    constructor() {
        super();
        this.state = {
            post: {},
            redirect: null,
        }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/posts/${this.props.my_match.params.id}/`);
        const data = await res.json();
        console.log(data)
        this.setState({ post: data })
    }
    handleDelete = async () => {
        const token = JSON.parse(localStorage.getItem('user')).token;
        const res = await fetch(`http://127.0.0.1:8000/api/posts/delete/${this.props.my_match.params.id}/`, {
            method: "DELETE",
            headers: {"Authorization": `Token ${token}`}
        })
        const data = await res.json()
        console.log(data)
        this.setState({redirect: true})
    }
    render() {
        const p = this.state.post
        if (this.state.redirect){
            return <Redirect to='/blog'/>
        }
        return (
            <>
            <div className="d-flex my-2">
                <Link to="/blog" className="text-dark mx-auto py-2 px-4"><i class="fas fa-arrow-left"></i></Link>
            </div>
            <div className="card  mb-3">
                <h5 className="card-header">{p.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{p.content}</h5>
                    <p className="card-text">By {p.author} on {p.date_posted}</p>
                </div>

                <div className="container py-2">
                    {/* update */}
                    <Link to={`/blog/update/${p.id}`} className="btn btn-secondary me-3" >Update</Link>
                    {/* delete */}

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                    </button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Post</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this post? This action cannot be undone.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={()=>this.handleDelete()} data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
    }
}
