import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //when map through something it is creating a list, list should have keys
        //add keys, unique ie. id
        return this.props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo}/>
        ));
    }
}

//Define PropTypes for this class Todos
Todos.propTypes = {
    //array, multiple objects
    todos: PropTypes.array.isRequired
}

export default Todos;
