var arrayList = [4, 5, 6, 7, 8, 90];

// Method1  
//Below code will set the variable arrayList to a new empty array. 
//This is recommended if you don't have references to the original array arrayList anywhere else because 
//It will actually create a new empty array. 
//You should be careful with this way of empty the array, 
//because if you have referenced this array from another variable, 
//then the original reference array will remain unchanged, 
//Only use this way if you have only referenced the array by its original variable arrayList.
arrayList = [];
console.log(arrayList);

//For Instance:

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

console.log("-------------------Method2-----------------------");

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
arrayList.length = 0
console.log(arrayList);


console.log("------------------ Method3-------------------------");
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arrayList);
arrayList.splice(0, arrayList.length);
console.log(arrayList);