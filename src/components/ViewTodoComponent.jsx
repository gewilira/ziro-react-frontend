import React, { Component } from 'react'
import TodoService from '../services/TodoService'

class ViewTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            todo: {}
        }
    }

    componentDidMount(){
        TodoService.getTodoById(this.state.id).then( res => {
            this.setState({todo: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Todo Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <div> { this.state.todo.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTodoComponent
