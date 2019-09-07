import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "./context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Consumer>
        {/* The 'value' reffed below is the entire state object
            inside of our  context.js file.  Remember, it was 
            passed as a prop to the consumer component like this
            value={this.state} */}
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i>Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Enter a song title. . ."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Lyrics!</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
