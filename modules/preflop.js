var preflop = require('./preflop');

var isPremiumHand = function(hole_cards){
      var r = hole_cards[0].rank;
    var r2 = hole_cards[1].rank;
    var first = (hole_cards[0].rank==="10" || r==="J" || r==="Q" || r==="K" || r==="A");
    var second = (r2==="10" || r2==="J" || r2==="Q" || r2==="K" || r2==="A");
    if(first && second){
        return true;
    }
    return false;
};

var acehigh = function(hole_cards){
  if(hole_cards[0].rank === "A" && !(hole_cards[1].rank <= 6)){
    return true;
  }
  if(hole_cards[1].rank === "A"&& !(hole_cards[0].rank <= 6)){
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

var call = function(game_state, bet){
   bet(game_state.current_buy_in - game_state.players[game_state.in_action].bet);
}

module.exports = {

  eval: function(game_state,bet) {
    var player = game_state.players[game_state.in_action];
    var hole_cards = player.hole_cards;
    if(acehigh(hole_cards)){
      call(game_state, bet);
      return;
    }
    if(isPocketPair(hole_cards)){
      bet(234872434);
      //call(game_state, bet);
      return;
    }
    if(isPremiumHand(hole_cards)){
      call(game_state, bet);
      return;
    }
    bet(0);
    return;
  },

  isPremiumHand: isPremiumHand,
  isAceHigh: acehigh,
  isPocketPair: isPocketPair
}
