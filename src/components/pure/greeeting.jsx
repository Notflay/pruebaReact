import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} Juan</h1>
        <h2>Tu edad es {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeeting.propTypes = {
  name: PropTypes.string,
};

export default Greeeting;
