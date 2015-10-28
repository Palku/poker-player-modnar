var preflop = require('./preflop');

var isPremiumHand = function(hole_cards){
  return true;
};

var acehigh = function(hole_cards){
  if(hole_cards[0].rank === "A" && !hole_cards[0].rank <= 6){
    return true;
  }
  if(hole_cards[1].rank === "A"&& !hole_cards[0].rank <= 6){
    return true;
  }
  return false;
}

var isPocketPair = function(hole_cards){
  if(hole_cards[0].rank === hole_cards[1].rank){
    return true;
  }
  return false;
}

module.exports = {

  eval: function(game_state,bet) {
    var player = game_state.players[game_state.in_action];
    var hole_cards = player.hole_cards;
    if(acehigh(hole_cards)){
      bet(10000000);
      return;
    }
    if(isPocketPair(hole_cards)){
      bet(10000000);
    }
    if(isPremiumHand(hole_cards)){
      bet(game_state.minimum_raise);
      return;
    }
  },

  isPremiumHand: isPremiumHand,
  isAceHigh: acehigh,
  isPocketPair: isPocketPair

}
