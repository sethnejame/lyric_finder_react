import React from "react";

export default function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
        </div>
      </div>
    </div>
  );
}
