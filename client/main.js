import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';

//tracker tracks changes on collections and update accordingly
import { Tracker } from 'meteor/tracker';

//import players collection on client - minimongo
import {Players, calculatePlayerPositions} from './../imports/api/players';
//imoprt react component
import App from './../imports/ui/App.js';

// code once DOM is ready
Meteor.startup(() => {
  //tracker updates as db updates
  Tracker.autorun(() => {
    //makes sure players are always updating
    let players = Players.find({}, {sort: {score: -1}}).fetch();
        // ascending - descending -1
    // find can take a query. either just find() or find({score: 0}). to have sort we need to ahve 1st empty object
    let positionedPlayers = calculatePlayerPositions(players);
    let title = "Keep App";
    // creates react dom
    ReactDom.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
  });
});
