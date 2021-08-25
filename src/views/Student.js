import React, { Component } from 'react'
import StudentName from '../components/StudentName';

export default class Student extends Component {
    constructor(){
        super();
        this.state = {
            studentdata: {
                students: [],
                name: null
            }
        }

    }
    componentDidMount(){
        fetch(`https://shohablog-django.herokuapp.com/api/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    studentdata: data
                })
                })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <h1>This is the student page</h1>
                <h1>Class Name: {this.state.studentdata.name}</h1>
                {this.state.studentdata.students.map((obj, i)=><StudentName obj={obj} key={i}/>)}
            </div>
        )
    }
}
