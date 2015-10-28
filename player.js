
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {

    bet(game_state.players[game_state.in_action].stack);
    console.log(game_state);
  },

  showdown: function(game_state) {

  }
};
