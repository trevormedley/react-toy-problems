import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Cade Cunningham",
          position: "Guard",
          team: "Detroit Pistons",
        },
        {
          name: "Spencer Torkelson",
          age: 22,
          team: "brown",
        },
        {
          name: "Deandre Swift",
          age: 23,
        },
      ],

      userInput: "",
      filteredArray: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filteredPlayers(prop) {
      var players = this.state.players;
      var filteredPlayers = [];

      for (let i = 0; i < filteredPlayers.length; i++) {
          if (players[i].hasOwnProperty(prop)) {
              filteredPlayers.push(players[i]);
          } 
      }
    
      this.setState({filteredPlayers: filteredPlayers});
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.players, null, 10) }</span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={ () => this.filteredPlayers(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPlayers, null, 10) } </span>
      </div>
    );
  }
}
