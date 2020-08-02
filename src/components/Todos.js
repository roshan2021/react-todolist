import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class Todos extends Component {
    render() {
        //when map through something it is creating a list, list should have keys
        //add keys, unique ie. id
        return this.props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo}/>
        ));
    }
}

export default Todos;
