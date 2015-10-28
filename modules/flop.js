module.exports = {
  eval: function(game_state,bet) {
    console.log("flop module");
    bet(game_state.players[game_state.in_action].stack);
  }
}
