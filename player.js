var preflopModule = require('./modules/preflop');
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    if (game_state.community_cards.length === 0) {
      preflop.eval(game_state, bet);
    } else {
      bet(game_state.players[game_state.in_action].stack);
      console.log(game_state);
    }
  },

  showdown: function(game_state) {

  }
};
