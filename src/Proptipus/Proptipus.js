import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// This is the state being imported in for cleanliness
import ProptipusState from "./ProptipusState"

import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";
class Proptipus extends React.Component {
  state = ProptipusState;

  incrementNumber = () => {
    let newNum = this.state.magicNumber + 1;
    this.setState({
      magicNumber: newNum,
    });
  };

  decrementNumber = () => {
    let newNum = this.state.magicNumber - 1;
    this.setState({
      magicNumber: newNum,
    });
  };

  toggleShowHide = (value) => {
    value === "show"
      ? this.setState({ showMovies: true })
      : this.setState({ showMovies: false });
  };

  sortMovies = () => {
    if (this.state.moviesFilter === "All") {
      return this.state.favoriteMovies;
    }
    let filteredArray = this.state.favoriteMovies.filter(
      (movie) => movie.genre === this.state.moviesFilter
    );
    return filteredArray;
  };

  setMovieFilter = (value) => {
    this.setState({ moviesFilter: value });
  };

  // This is where you will be writing most of your functions!
  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} alt="logo" />
        <img
          className="proptipus-image"
          src={ProptipusBackground}
          alt="background"
        />
        <TentacleOne punchline={this.state.punchline} />
        <TentacleTwo favoriteFishGiOhCard={this.state.favoriteFishGiOhCard} />
        <TentacleThree hatedFishGiOhCard={this.state.hatedFishGiOhCard} />
        <TentacleFour friendsList={this.state.friendsList} />
        <TentacleFive
          incrementNumber={this.incrementNumber}
          decrementNumber={this.decrementNumber}
        />
        <TentacleSix magicNumber={this.state.magicNumber} />
        <TentacleSeven
          setFilter={this.setMovieFilter}
          toggle={this.toggleShowHide}
          show={this.state.showMovies}
        />
        <TentacleEight
          movies={this.state.showMovies 
            ? this.sortMovies() 
            : []}
        />
      </div>
    );
  }
}

export default Proptipus;
