import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "Waterfalls" } },
      { track: { track_name: "Toms Diner" } }
    ],
    heading: "Top 10 Tracks"
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {/* Whatever state we put in this provider
        will be accessible by all other components 
        as long as we use what's called the 'consumer' */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
// this is what we import to our component in order
// to access state from the context, like { connect }
