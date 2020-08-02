import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from './components/pages/About';
// import uuid from 'uuid';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'Dinner with wife',
                completed: true
            },
            {
                id: 3,
                title: 'Meeting with boss',
                completed: false
            }
        ]
    }

    //Toggle markComplete
    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
            })  });
    }

    //Delete todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }


    //Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

  render() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header />
                    <Route path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addToDo={this.addTodo}/>
                            <Todos todos={this.state.todos}
                                   markComplete={this.markComplete}
                                   delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
