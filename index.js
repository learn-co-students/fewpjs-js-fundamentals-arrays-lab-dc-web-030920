// Write your solution here!
var pets = ["Milo", "Otis", "Garfield"];

const append = [...pets, "Odie"];
const prepend = ["Odie", ...pets];
const removeLast = pets.slice(0, pets.length - 1);
const removeFirst = pets.slice(1);

