import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.score} points</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={()=> {
              //increase button
              Players.update(
                {_id: this.props.player._id},
                {$inc: {score: 1}
              });
            }}>+1</button>
            <button className="button button--round" onClick={()=> {
              //decrease button
              Players.update(
                {_id: this.props.player._id},
                {$inc: {score: -1}
              });
            }}>-1</button>
            <button className="button button--round" onClick={() => Players.remove({_id: this.props.player._id})}>X</button>
          </div>
        </div>
      </div>
      // ^^remove player with this id from db
    );
   }
};

// make sure that PLayer is always passed to the component
Player.propTypes = {
  player: PropTypes.object.isRequired
};
