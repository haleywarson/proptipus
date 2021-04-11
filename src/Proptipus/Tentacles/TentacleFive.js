import React from "react";
// import TentacleSix from "./TentacleSix.js";

class TentacleFive extends React.Component {

  render() {
    return (
      <div className="tentacle-five">
      <br/>
      <span className="magic-remote-text">Magic</span>
      <br/>
      <span className="magic-remote-text">Remote</span>
      <br/>
      <button className="magic-remote-button color-1" 
      onClick={this.props.decrementNumber}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={this.props.incrementNumber}>+</button>
      <br/>
      </div>
    );
  }
}

export default TentacleFive;
