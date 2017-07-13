/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let value = 0;
  hand.forEach((currentItem) => {
    if (currentItem !== 'A') {
      if (currentItem === 'J' || currentItem === 'Q' || currentItem ===  'K') {
        value += 10;
      } else {
        value += parseInt(currentItem);
      }
    }
  });
  hand.forEach((currentItem) => {
    // add forEach for A's
    if (currentItem === 'A') {
      if (value >= 11) {
        value += 1
      }
     else {
      value += 11
     }
    }
  });
return value;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
