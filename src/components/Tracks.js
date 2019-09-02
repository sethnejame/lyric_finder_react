import React, { Component } from "react";
import { Consumer } from "./context";
import Spinner from "./Spinner";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list } = value;
          // the above destructures the value object and
          // 'pulls out' the track_list property
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return <h1>Tracks loaded</h1>;
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
