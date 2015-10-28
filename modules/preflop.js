module.exports = {
  eval: function(game_state,bet) {
    bet(game_state.players[game_state.in_action].stack);
  },

  isPremiumHand: function(hole_cards){
    return true;
  },
  test: function(){
    isPremiumHand({});
  }
}
