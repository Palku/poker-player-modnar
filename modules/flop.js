var betRatio = function(holeCards, communityCards) {
  // console.log(holeCards);
  // console.log(communityCards);
  var cCount = {};
  var colorC = {};
  var topNumber = 0;
  var colorNumber = 0;
  communityCards.forEach((c) => {
    cCount[c.rank] = 1;
    if (!colorC[c.suit])
      colorC[c.suit] = 1;
    else
      colorC[c.suit]++;
    if (colorC[c.suit] > colorNumber)
      colorNumber = colorC[c.suit];
  });
  holeCards.forEach((c) => {
    if (!cCount[c.rank]) {
      cCount[c.rank] = 1;
    } else {
      cCount[c.rank]++;
    }
    if (cCount[c.rank] > topNumber)
      topNumber = cCount[c.rank];
    if (!colorC[c.suit])
      colorC[c.suit] = 1;
    else
      colorC[c.suit]++;
    if (colorC[c.suit] > colorNumber)
      colorNumber = colorC[c.suit];
  });
  if (colorNumber >= 5)
    return 2;
  if (topNumber > 1)
    return 1;

  return 0;
}

module.exports = {
  eval: function(game_state, bet) {
    var hCards = game_state.players[game_state.in_action].hole_cards;
    var cCards = game_state.community_cards;
    var doBet = betRatio(hCards, cCards);
    if (doBet >= 1)
      bet(game_state.players[game_state.in_action].stack);
    else
      bet(0);
  }
}
