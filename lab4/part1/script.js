'use strict';

/**
 * Returns a string of the count and Bet or Hold
 * @param {array} cards - an array of cards
 * @returns {string} - message 
 */
function countCards(cards) {
    let count = 0;
    
    // Iterate through each card and update the count based on its value
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        
        if (card === 'A' || card === 'K' || card === 'Q' || card === 'J' || card === 10) {
            count -= 1;
        } else if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
            count += 1;
        }
        // Cards 7, 8, and 9 are neutral and do not change the count
    }
    
    // Return the count and Bet or Hold based on the count's value
    return count + " " + (count > 0 ? "Bet" : "Hold");
}

// Uncomment the following test code after implementing the function
console.log(countCards([2, 3, 7, 'K', 'A'])); // Expected output: "1 Bet"
console.log(countCards([2, 3, 4, 5, 6])); // Expected output: "5 Bet"
console.log(countCards([7, 8, 9])); // Expected output: "0 Hold"
console.log(countCards([10, 'J', 'Q', 'K', 'A'])); // Expected output: "-5 Hold"
console.log(countCards([3, 7, 'Q', 8, 'A'])); // Expected output: "-1 Hold"
console.log(countCards([2, 2, 10])); // Expected output: "1 Bet"
console.log(countCards([2, 9, 'J', 2, 7])); // Expected output: "2 Bet"
console.log(countCards([3, 2, 'A', 10, 'K'])); // Expected output: "0 Hold"
