import React from "react";

class TodoList extends React.Component {
  state = {
    todoList: []
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    const url = "https://jsonplaceholder.typicode.com/todos?userId=" + id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ todoList: data });
  }

  render() {
    // console.log(this.state.todoList);
    let array = this.state.todoList.map(todo => <div>{todo.title}</div>);
    return <div>Todo List{array}:</div>;
  }
}

export default TodoList;
