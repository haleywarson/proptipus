import React from "react";

class TentacleOne extends React.Component {
  
  render() {
    const { punchline } = this.props

    return (
      <div className="tentacle-one">
        <br />
        <br />
        <span className="joke-setup">
          How many tickles does it take to make me laugh?
        </span>
        <br />
        <span className="punchline">{ punchline }</span>
      </div>
    );
  }
}

export default TentacleOne;
