import React from "react";
import Todo from "./component/Todo";
import todoData from "./component/todoData";
import "./App.css"

class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(id) {
    // console.log("checked", id);
    
      const updated = this.state.todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed
          console.log(todos)
        }
        return todos
      })  
      this.setState({todos:updated})
  }

  render() {
    const todoItem = this.state.todos.map(items => 
    <Todo key={items.id} items={items} handleCheck={this.handleCheck}/>)
    return (
      <div className="todo-list">
      {todoItem}
      </div>
    );
  }

}

export default App;
