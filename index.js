// Consonant Count
// Given a string and a target number, determine whether the string contains exactly the target number of consonants.

// Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
// Ignore digits, punctuation, spaces, and other non-letter characters when counting.

// function hasConsonantCount(text, target) {
//   console.log(text, target);
//   const regex = /[aeiou]/gi;
//   const removeVowels = text.replaceAll(regex, '');
//   console.log(removeVowels);
//   const nonLet = /[^a-z]/gi;
//   const removeNonLetters = removeVowels.replaceAll(nonLet, '');
//   console.log(removeNonLetters);
//   if (removeNonLetters.length === target) {
//     return true;
//   }
//   return false;
//   //return text;
// }

function hasConsonantCount(text, target) {
  const consonantsOnly = text.replace(/[^a-z]|[aeiou]/gi, '');
  return consonantsOnly.length === target;
}
