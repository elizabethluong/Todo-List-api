import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="User">
        <h1>Title: {this.props.name}</h1>
      </div>
    );
  }
}

export default User;
