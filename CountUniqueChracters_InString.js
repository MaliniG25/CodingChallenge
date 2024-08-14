let string = "Malini";
let uniqueChars = new Set();
for (let i = 0; i < string.length; i++)
{
    uniqueChars.add(string[i]);
}
let uniqueCount = uniqueChars.size;
console.log(uniqueCount);