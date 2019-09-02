import React, { Component } from "react";
import { Consumer } from "./context";
import Spinner from "./Spinner";
import Track from "./Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          // the above destructures the value object and
          // 'pulls out' the track_list property
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track track={item.track} key={item.track_id} />
                  ))}
                </div>
              </>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
