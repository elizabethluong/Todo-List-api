import React from "react";
import User from "../Containers/User";

class Usernames extends React.Component {
  render() {
    const usernames = this.props.data;
    let array = usernames.map(person => <div>{person.name}</div>);
    return <div className="Usernames">{array}</div>;
  }
}

export default Usernames;
