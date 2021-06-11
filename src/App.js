import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./data/todosData"
import "./App.css"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }

        return todo
      })
      return {
        todos: updateTodos
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem item={item}
    handleChange={this.handleChange} />)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}

export default App