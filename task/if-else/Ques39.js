//String Starts with A: Write an `if-else` statement to check if a string starts with the letter "A". Print
//"Starts with A" if true, otherwise "Does not start with A."

let text = "apple";

// first way
if (text.toUpperCase().startsWith("A")) {
  console.log("starts with A");
} else {
  console.log("Does not start with A");
}

// second way
if (text[0].toUpperCase() === "A") {
  console.log("starts with A");
} else {
  console.log("Does not start with A");
}
