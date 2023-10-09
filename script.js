function isPalindrome(word) {
    // Convert the word to lowercase before comparing them so this way the comparison will be case insensitive
    word = word.toLowerCase();

    //we write a base case, an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Check each first and last characters to see if they are equal
    if (word[0] === word[word.length - 1]) {
        // Recur for the substring excluding the first and last characters, to extract a substring starting from the second character (index 1) up to the second-to-last character.
        return isPalindrome(word.slice(1, -1));
    }
    // If the first and last characters are not equal, it's not a palindrome
    return false;
}

// Now we test our function
console.log(isPalindrome("gag"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("phP"));
console.log(isPalindrome("radar"));
