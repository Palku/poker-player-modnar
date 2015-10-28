var preflop = require('./preflop');

var isPremiumHand = function(hole_cards){
  return true;
};

module.exports = {

  eval: function(game_state,bet) {
    var player = game_state.players[game_state.in_action];
    var hole_cards = player.hole_cards;
    if(isPremiumHand(hole_cards))
    {
      bet(500);
    }
  },

  isPremiumHand: isPremiumHand,
}
