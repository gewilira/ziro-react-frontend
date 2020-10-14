import React, { Component } from 'react'
import TodoService from '../services/TodoService'

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    deleteTodo(id){
        TodoService.deleteTodo(id).then( res => {
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
        });
    }
    viewTodo(id){
        this.props.history.push(`/view-todo/${id}`);
    }

    switchState(id){
        TodoService.switchState(id).then( res => {
            this.componentDidMount();
        });

    }
    editTodo(id){
        this.props.history.push(`/add-todo/${id}`);
    }

    componentDidMount(){
        TodoService.getTodos().then((res) => {
            this.setState({ todos: res.data});
            
        });
    }

    addTodo(){
        this.props.history.push('/add-todo/_add');
    }

    isComplete(completed) {
        if(completed){
            return "Uncomplete"
        }else{
            return "Complete"
        }
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Todo List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTodo}> Add Todo</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>To Do</th>
                                    <th>Completed Date</th>
                                    <th>Is Completed</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo => 
                                        <tr key = {todo.id}>
                                             <td> { todo.description} </td>
                                             <td> { todo.completedDate} </td>
                                             <td> { String(todo.completed) }</td>
                                             <td>
                                                 <button onClick={ () => this.editTodo(todo.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTodo(todo.id)} className="btn btn-danger">Delete </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.switchState(todo.id)} className="btn btn-info">{this.isComplete(todo.completed)} </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTodoComponent
