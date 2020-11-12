import React, { Component } from "react";
import styles from "./Vote.module.css";

class Vote extends Component {

    constructor(props){
        super(props);
        this.state ={
            counter:0,
            mouseOverCount:0
        };
    }

    mouseOver = ()=>{
        this.setState({
           mouseOverCount: this.state.mouseOverCount +1
        })
    }

  voted = ()=>{
      this.setState({
          counter: this.state.counter + 1
      })
  }

  render() {
    return (
      <div onClick={this.voted} className={styles.card} onMouseOver={this.mouseOver}>
        <h1>{this.props.candidate}</h1>
        <h6>{this.props.city}</h6>
        <h2>{this.state.counter}</h2>
        <p>{this.state.mouseOverCount}</p>
      </div>
    );
  }
}

export default Vote;
