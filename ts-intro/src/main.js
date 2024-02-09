function doubleNumbers (arr)
{
   return arr.map((number)=> number *2); 
}
const arr = [2,3,4,5]
const arrDoubled = doubleNumbers(arr);
console.log(arrDoubled);