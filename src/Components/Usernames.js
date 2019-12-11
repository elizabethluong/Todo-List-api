import React from "react";
import { Link } from "react-router-dom";

//import User from "../Containers/User";

class Usernames extends React.Component {
  render() {
    const usernames = this.props.data;
    let array = usernames.map(person => (
      <div>
        <Link to={"/todo/" + person.id}>
          <button>{person.name}</button>
        </Link>
      </div>
    ));
    return <div className="Usernames">{array}</div>;
  }
}

export default Usernames;
