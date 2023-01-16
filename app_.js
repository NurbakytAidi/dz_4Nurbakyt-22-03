var array = [1,2,3,4,4,2,6,6,5,8,9,12,34,34,12,67,0,0]
var array2 = [];
for (var number of array){
    if (array2.includes(number)) continue;
    array2.push(number)
}
console.log(array)
console.log(array2)