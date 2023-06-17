import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./components/Controls";


// the connect allows you to connect to the store

class App extends Component {

  
  
  render() {
    const { count, name } = this.props;

    return (
      <>
        <h1> {name} is {count}</h1>
        <Controls/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, name: state.name};
}

export default connect(mapStateToProps)(App);
