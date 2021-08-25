import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>This is the About Page</h1>
                <h3>The company is {this.props.my_company}</h3>
                <h3>My name is {this.props.name.toUpperCase()}</h3>
            </div>
        )
    }
}
