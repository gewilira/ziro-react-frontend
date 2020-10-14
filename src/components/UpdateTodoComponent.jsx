import React, { Component } from 'react'
import TodoService from '../services/TodoService';

class UpdateTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    }

    componentDidMount(){
        TodoService.getTodoById(this.state.id).then( (res) =>{
            let todo = res.data;
            this.setState({description: todo.description
            });
        });
    }

    updateTodo = (e) => {
        e.preventDefault();
        let todo = {description: this.state.description};
        console.log('todo => ' + JSON.stringify(todo));
        console.log('id => ' + JSON.stringify(this.state.id));
        TodoService.updateTodo(todo, this.state.id).then( res => {
            this.props.history.push('/todos');
        });
    }
    
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Todo</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTodo}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTodoComponent
