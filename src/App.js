import React from "react";
import "./App.css";
import Usernames from "./Components/Usernames";

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
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>loading...</div>
        ) : (
          <div>
            <h1>Names: </h1>
            <Usernames data={this.state.people} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
