import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./components/Controls";

class App extends Component {
  render() {
    const { count, name } = this.props;

    return (
      <>
        <h1>
          {name}' count is {count}
        </h1>
        <Controls />
      </>
    );
  }
}

// the function below simply explains what data you want from the store
function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

// the connect allows you to connect to the store

export default connect(mapStateToProps)(App);
