//var preflopModule = require('./modules/preflop');
var preflop = require('./modules/preflop');
var flop = require('./modules/flop');
var isPremiumHand = function(hole_cards) {
  return true;
};

module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    // var player = game_state.players[game_state.in_action];
    // var hole_cards = player.hole_cards;
    // if (isPremiumHand(hole_cards)) {
    //   bet(player.stack);
    // } else {
    //   bet(0);
    // }
    // return;


    switch (game_state.community_cards.length) {
      case 0:
        preflop.eval(game_state, bet);
        break;
      case 3:
        flop.eval(game_state, bet);
        break;
      default:
        bet(game_state.players[game_state.in_action].stack);
        break;
    }
  },

  showdown: function(game_state) {

  }
};
