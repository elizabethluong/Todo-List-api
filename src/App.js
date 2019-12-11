import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Usernames from "./Components/Usernames";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.loading || !this.state.people.length ? (
            <div>loading...</div>
          ) : (
            <div>
              <h1>Usernames: </h1>
              <Route
                exact
                path="/"
                render={() => <Usernames data={this.state.people} />}
                // when fetching use render instead of component.
              />
              <Route path="/todo/:id" component={TodoList} />
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
