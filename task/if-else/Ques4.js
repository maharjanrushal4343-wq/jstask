// Vowel or Consonant

let letter = "b";


// Simple way
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("vowel");
} else {
  console.log("consonent");
}



// Optimized way

if ("aeiou".includes(letter)) {
  console.log("vowel");
} else {
  console.log("consonent");
}
