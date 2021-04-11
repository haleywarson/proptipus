import React from "react";

class TentacleEight extends React.Component {

  render() {
    return (
      <div className="tentacle-eight">
        {this.props.movies.map((movie) => 
          <span className="movie-card">
            <span className="movie-title">{movie.title}</span>
            <br />
            <span className="movie-review">{movie.review}</span>
            <br />
          </span>
        )}
      </div>
    );
  }
}

export default TentacleEight;
