import React, { Component } from 'react'

export default class StudentName extends Component {
    render() {
        const o = this.props.obj
        return (
            <div>
                <h3>{o.first_name} {o.last_name}</h3>
            </div>
        )
    }
}
