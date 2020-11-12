import React, { Component } from "react";
import Vote from "./Votes";
class VoteList extends Component {

  render() {
    return (
      <div class="votes">
        
        <Vote candidate="Sepp" city="Bregenz" />
        <Vote candidate="Ali" city="Gaissau" />
        <Vote candidate="Andi" city="Dornbirn" />
      </div>
    );
  }
}

export default VoteList;
