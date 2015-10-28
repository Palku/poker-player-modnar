module.exports = {
  function eval(game_state, bet){
    bet(game_state.players[game_state.in_action].stack);
  }
}
