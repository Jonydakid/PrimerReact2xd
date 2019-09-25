import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Header from './layout/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './Pages/About'
import axios from 'axios';

class App extends Component {
  
  state={
    todos: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
  }
  //Marca el checkbox cambiando su estado y mostrando el id
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed= !todo.completed
      }
      return todo;
    }) });
  }
  //Borra el item
  delTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}));
    
  }
  //Añade item
  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title: title,completed: false})
    .then(res=>this.setState({
      todos:[...this.state.todos, res.data]
    }))
  }
  // Función que renderiza
  render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo AddTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
              </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
          
        </div>
      </div>
    </Router>
      
  );
  }
}

export default App;
