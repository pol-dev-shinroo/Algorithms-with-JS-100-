// Create a Set
const letters = new Set<string>(["a", "b", "c"]);

console.log(typeof letters);
console.log(letters);
console.log(letters.a);
// to add to set
letters.add("d");
console.log(letters);
// to check for existence
console.log(letters.has("a"));
// to delete
letters.delete("b");
console.log(letters);
// to clear whole set
letters.clear();
console.log(letters);
