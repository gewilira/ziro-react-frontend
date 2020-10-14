import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:9090/api/todo";

class TodoService {

    getTodos(){
        return axios.get(TODO_API_BASE_URL);
    }

    createTodo(todo){
        return axios.post(TODO_API_BASE_URL, todo);
    }

    getTodoById(TodoId){
        return axios.get(TODO_API_BASE_URL + '/' + TodoId);
    }

    updateTodo(todo, TodoId){
        return axios.put(TODO_API_BASE_URL + '/' + TodoId, todo);
    }

    deleteTodo(TodoId){
        return axios.delete(TODO_API_BASE_URL + '/' + TodoId);
    }

    switchState(TodoId){
        return axios.put(TODO_API_BASE_URL + '/switchState/' + TodoId);
    }
}

export default new TodoService()