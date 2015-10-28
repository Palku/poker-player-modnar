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
                    "rank": "6",                    // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
                    "suit": "hearts"                // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
                },
                {
                  "rank": "6",
                    "suit": "spades"
                }
            ];
console.log(hole_cards);
console.log("ace high:" + preflopModule.isAceHigh(hole_cards));
