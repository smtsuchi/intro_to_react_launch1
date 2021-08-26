import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount(){
        
        fetch(`http://127.0.0.1:8000/api/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    articles: data.articles
                })
            })
            .catch(error => console.log(error))
    }

    handleDelete = () =>{
        fetch(`http://127.0.0.1:8000/api/posts/delete/9/`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
            </div>
        )
    }
}
