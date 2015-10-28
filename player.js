//var preflopModule = require('./modules/preflop');
module.exports = {

  VERSION: "Default JavaScript folding player",

  var isPremiumHand = function(hole_cards){
    return true;
  };

  bet_request: function(game_state, bet) {
    var player = game_state.players[game_state.in_action];
    var hole_cards = player.hole_cards;
    if( isPremiumHand(hole_cards)){
      bet(game_state.players[game_state.in_action].stack);
    }
    else {
      bet(0);
    }
    return;

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
