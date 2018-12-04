var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = ["cardOne", "cardTwo"];
var cardOne = cards[0];
console.log("user flipped queen");
var cardTwo = cards[2];
console.log("user flipped king");

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again")
  }
}
