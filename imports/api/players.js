import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

// creates the new collection
export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index-1].score > player.score) {
      //if the person is not the first one && if they don't have a greater score to mine
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};
