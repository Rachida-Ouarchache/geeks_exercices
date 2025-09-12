// exercice 1
function mergeWords(string) {
 return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}
// 1
console.log(mergeWords('Hello')());
// 2
console.log(mergeWords('There')('is')('no')('spoon.')()); 
// 3
const mergeWords = (string) => (nextString) => nextString === undefined ? string : mergeWords(string + " " + nextString);
