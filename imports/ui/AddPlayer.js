import React from 'react';
import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    // grab the player name from form
    let playerName = e.target.playerName.value;
    //prevents from reloading page on submit
    e.preventDefault();
    //makes sure the playerName input is valid
    if (playerName) {
      //clears the form first
      e.target.playerName.value = '';
      // insert playerName in db
      Players.insert({
        name : playerName,
        score: this.props.score
        //if you want to reference the prop inside the method, you need ot add bind when you call function
      });
    }
  }

  //react render
  render() {
    return (
      // using .bind(this) to be able to reference prop
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add player</button>
        </form>
      </div>
    );
  }
};
