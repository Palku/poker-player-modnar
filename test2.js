var preflopModule = require('./modules/preflop');

var hole_cards = [                         // The cards of the player. This is only visible for your own player
                {
                    "rank": "7",                    // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
                    "suit": "hearts"                // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
                },
                {
                    "rank": "A",
                    "suit": "spades"
                }
            ];
console.log(hole_cards);
console.log("ace high:" + preflopModule.isAceHigh(hole_cards));



var hole_cards = [                         // The cards of the player. This is only visible for your own player
                {
                    "rank": "10",                    // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
                    "suit": "hearts"                // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
                },
                {
                  "rank": "4",
                    "suit": "spades"
                }
            ];
console.log(hole_cards);
console.log("ace high:" + preflopModule.isAceHigh(hole_cards));
console.log("pocket pair:" + preflopModule.isPocketPair(hole_cards));
console.log("is premium: " + preflopModule.isPremiumHand(hole_cards));
