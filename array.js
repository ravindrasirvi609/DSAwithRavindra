// diffrente ways to create an array
// 1. using array literal
// 2. using new keyword
// 3. using Array.from() method
// 4. using Array.of() method
// 5. using Array() constructor
// 6. using spread operator




// 1. using array literal

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); 
// Output: [1, 2, 3, 4, 5]

// 2. using new keyword
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2); 
// Output: [1, 2, 3, 4, 5]

// 3. using Array.from() method
let arr3 = Array.from([1, 2, 3, 4, 5]);
console.log(arr3); 
// Output: [1, 2, 3, 4, 5]

// 4. using Array.of() method
let arr4 = Array.of(1, 2, 3, 4, 5);
console.log(arr4); 
// Output: [1, 2, 3, 4, 5]

// 5. using Array() constructor
let arr5 = Array(1, 2, 3, 4, 5);
console.log(arr5); 
// Output: [1, 2, 3, 4, 5]

// 6. using spread operator
let arr6 = [...[1, 2, 3, 4, 5]];
console.log(arr6); 
// Output: [1, 2, 3, 4, 5]




// Array Methods: 
// 1. push() method
// 2. pop() method
// 3. shift() method
// 4. unshift() method
// 5. concat() method
// 6. slice() method
// 7. splice() method
// 8. indexOf() method
// 9. lastIndexOf() method
// 10. includes() method
// 11. find() method
// 12. findIndex() method
// 13. filter() method
// 14. map() method
// 15. reduce() method
// 16. forEach() method
// 17. every() method
// 18. some() method
// 19. sort() method
// 20. reverse() method
// 21. join() method
// 22. toString() method
// 23. fill() method
// 24. copyWithin() method
// 25. flat() method
// 26. flatMap() method
// 27. entries() method
// 28. keys() method
// 29. values() method
// 30. from() method
// 31. isArray() method
// 32. of() method
// 33. length property
// 34. prototype property
// 35. Symbol.iterator property
// 36. Symbol.species property
// 37. Symbol.unscopables property
// 38. Symbol.toStringTag property
// 39. Symbol.isConcatSpreadable property
// 40. Symbol.match property
// 41. Symbol.replace property
// 42. Symbol.search property
// 43. Symbol.split property
// 44. Symbol.toPrimitive property
// 45. Symbol.hasInstance property
// 46. Symbol.iterator property
// 47. Symbol.toPrimitive property
// 48. Symbol.toStringTag property
// 49. Symbol.unscopables property
// 50. Symbol.species property
// 51. Symbol.match property
// 52. Symbol.replace property
// 53. Symbol.search property
// 54. Symbol.split property


// 1. push() method
let arr7 = [1, 2, 3];
arr7.push(4);
console.log(arr7);
// Output: [1, 2, 3, 4]

// 2. pop() method
let arr8 = [1, 2, 3];
arr8.pop();
console.log(arr8);
// Output: [1, 2]

// 3. shift() method
let arr9 = [1, 2, 3];
arr9.shift();
console.log(arr9);
// Output: [2, 3]

// 4. unshift() method
let arr10 = [1, 2, 3];
arr10.unshift(0);
console.log(arr10);
// Output: [0, 1, 2, 3]

// 5. concat() method
let arr11 = [1, 2, 3];
let arr12 = arr11.concat([4, 5]);
console.log(arr12);
// Output: [1, 2, 3, 4, 5]

// 6. slice() method
let arr13 = [1, 2, 3, 4, 5];
let arr14 = arr13.slice(1, 4);
console.log(arr14);
// Output: [2, 3, 4]

// 7. splice() method
let arr15 = [1, 2, 3, 4, 5];
let arr16 = arr15.splice(1, 2);
console.log(arr16);
// Output: [2, 3]

// 8. indexOf() method
let arr17 = [1, 2, 3, 4, 5];
let index = arr17.indexOf(3);
console.log(index);
// Output: 2

// 9. lastIndexOf() method
let arr18 = [1, 2, 3, 4, 3, 5];
let index1 = arr18.lastIndexOf(3);
console.log(index1);
// Output: 4

// 10. includes() method
let arr19 = [1, 2, 3, 4, 5];
let isPresent = arr19.includes(3);
console.log(isPresent);
// Output: true

// 11. find() method
let arr20 = [1, 2, 3, 4, 5];
let found = arr20.find((element) => element > 2);
console.log(found);
// Output: 3

// 12. findIndex() method
let arr21 = [1, 2, 3, 4, 5];
let foundIndex = arr21.findIndex((element) => element > 2);
console.log(foundIndex);
// Output: 2

// 13. filter() method
let arr22 = [1, 2, 3, 4, 5];
let filtered = arr22.filter((element) => element > 2);
console.log(filtered);
// Output: [3, 4, 5]

// 14. map() method
let arr23 = [1, 2, 3, 4, 5];
let mapped = arr23.map((element) => element * 2);
console.log(mapped);
// Output: [2, 4, 6, 8, 10]

// 15. reduce() method
let arr24 = [1, 2, 3, 4, 5];
let reduced = arr24.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reduced);
// Output: 15

// 16. forEach() method
let arr25 = [1, 2, 3, 4, 5];
arr25.forEach((element) => console.log(element));
// Output: 1 2 3 4 5

// 17. every() method
let arr26 = [1, 2, 3, 4, 5];
let isEvery = arr26.every((element) => element > 2);
console.log(isEvery);
// Output: false

// 18. some() method
let arr27 = [1, 2, 3, 4, 5];
let isSome = arr27.some((element) => element > 2);
console.log(isSome);
// Output: true

// 19. sort() method
let arr28 = [3, 1, 4, 1, 5];
arr28.sort();
console.log(arr28);
// Output: [1, 1, 3, 4, 5]

// 20. reverse() method
let arr29 = [1, 2, 3, 4, 5];
arr29.reverse();
console.log(arr29);
// Output: [5, 4, 3, 2, 1]

// 21. join() method
let arr30 = [1, 2, 3, 4, 5];
let joined = arr30.join("-");
console.log(joined);
// Output: 1-2-3-4-5

// 22. toString() method
let arr31 = [1, 2, 3, 4, 5];
let str = arr31.toString();
console.log(str);
// Output: 1,2,3,4,5

// 23. fill() method
let arr32 = [1, 2, 3, 4, 5];
arr32.fill(0);
console.log(arr32);
// Output: [0, 0, 0, 0, 0]

// 24. copyWithin() method
let arr33 = [1, 2, 3, 4, 5];
arr33.copyWithin(0, 3);
console.log(arr33);
// Output: [4, 5, 3, 4, 5]

// 25. flat() method
let arr34 = [1, [2, 3], [4, [5]]];
let flat = arr34.flat();
console.log(flat);
// Output: [1, 2, 3, 4, [5]]

// 26. flatMap() method
let arr35 = [1, 2, 3, 4, 5];
let flatMapped = arr35.flatMap((element) => [element * 2]);
console.log(flatMapped);
// Output: [2, 4, 6, 8, 10]

// 27. entries() method
let arr36 = [1, 2, 3, 4, 5];
let iterator = arr36.entries();
console.log(iterator.next().value);
// Output: [0, 1]

// 28. keys() method
let arr37 = [1, 2, 3, 4, 5];
let iterator1 = arr37.keys();
console.log(iterator1.next().value);
// Output: 0

// 29. values() method
let arr38 = [1, 2, 3, 4, 5];
let iterator2 = arr38.values();
console.log(iterator2.next().value);
// Output: 1

// 30. from() method
let arr39 = Array.from("hello");
console.log(arr39);
// Output: ["h", "e", "l", "l", "o"]

// 31. isArray() method
let arr40 = [1, 2, 3, 4, 5];
let isArray = Array.isArray(arr40);
console.log(isArray);
// Output: true

// 32. of() method
let arr41 = Array.of(1, 2, 3, 4, 5);
console.log(arr41);
// Output: [1, 2, 3, 4, 5]

// 33. length property
let arr42 = [1, 2, 3, 4, 5];
console.log(arr42.length);
// Output: 5

// 34. prototype property
let arr43 = [1, 2, 3, 4, 5];
console.log(Array.prototype);
// Output: [constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, ...]

// 35. Symbol.iterator property
let arr44 = [1, 2, 3, 4, 5];
console.log(arr44[Symbol.iterator]);
// Output: ƒ values() { [native code] }

// 36. Symbol.species property
let arr45 = [1, 2, 3, 4, 5];
console.log(arr45[Symbol.species]);
// Output: undefined

// 37. Symbol.unscopables property
let arr46 = [1, 2, 3, 4, 5];
console.log(arr46[Symbol.unscopables]);
// Output: {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, ...}

// 38. Symbol.toStringTag property
let arr47 = [1, 2, 3, 4, 5];
console.log(arr47[Symbol.toStringTag]);
// Output: undefined

// 39. Symbol.isConcatSpreadable property
let arr48 = [1, 2, 3, 4, 5];
console.log(arr48[Symbol.isConcatSpreadable]);
// Output: undefined

// 40. Symbol.match property
let arr49 = [1, 2, 3, 4, 5];
console.log(arr49[Symbol.match]);
// Output: undefined

// 41. Symbol.replace property
let arr50 = [1, 2, 3, 4, 5];
console.log(arr50[Symbol.replace]);
// Output: undefined

// 42. Symbol.search property
let arr51 = [1, 2, 3, 4, 5];
console.log(arr51[Symbol.search]);
// Output: undefined

// 43. Symbol.split property
let arr52 = [1, 2, 3, 4, 5];
console.log(arr52[Symbol.split]);
// Output: undefined



//H.W.  

let arr53 = ["apple", "banana", "mango", "orange", "grapes"];
arr53.push("kiwi");
console.log(arr53);
// Output: ["apple", "banana", "mango", "orange", "grapes", "kiwi"]

let arr54 = ["apple", "banana", "mango", "orange", "grapes"];
arr54.shift();
console.log(arr54);
// Output: ["banana", "mango", "orange", "grapes"]

let arr55 = ["apple", "banana", "mango", "orange", "grapes"];
arr55.splice(0, 1, "kiwi", "papaya");
console.log(arr55);
// Output: ["kiwi", "papaya", "banana", "mango", "orange", "grapes"]

let arr56 = ["apple", "banana", "mango", "orange", "grapes"];
let arr57 = arr56.slice(2, 3);
console.log(arr57);
// Output: ["mango"]


let arr58 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr58.length; i++) {
      let element = arr58[i];
      console.log(element);
      arr58[i] = arr58[arr58.length - 1 - i];
      arr58[arr58.length - 1 - i] = element;

}
console.log(arr58);
// Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

let arr59 = ["ram", "shyam", "mohan", "sohan", "rohan"];
let arr60 = ["sita", "gita", "rita", "mona", "sona"];
let arr61 = [...arr59, ...arr60];
console.log(arr61);
// Output: ["ram", "shyam", "mohan", "sohan", "rohan", "sita", "gita", "rita", "mona", "sona"]

let arr62 = ["apple", "banana", "mango", "orange", "grapes"];
arr62.sort();
console.log(arr62);
// Output: ["apple", "banana", "grapes", "mango", "orange"]

let arr63 = ["apple", "banana", "mango", "orange", "grapes"];
let arr64 = arr63.map((fruit)=> fruit.toUpperCase())
console.log(arr64);


let arr65 = ["apple", "banana", "mango", "orange", "grapes"];
let arr66 = arr65.filter((fruit)=> fruit.length>5)
console.log(arr66);


let arr67 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr68 = arr67.reduce((previousValue,currentValue) => previousValue+ currentValue)
console.log(arr68);


let arr69 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr70 = arr69.filter((item)=> item%2 !==0)
console.log(arr70);

let arr71 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isSmallAll = arr71.every((item)=> item> 5);
console.log(isSmallAll);

let arr72 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isSmall = arr72.some((item)=> item> 5);
console.log(isSmall);

let arr73 = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < arr73.length; i++) {
      for (let j = 0; j < arr73.length; j++) {
      }
                 console.log(arr73[i]);      
}

let arr74 = [[1,2,3],[4,5,6],[7,8,9]]
let arr75 = [[1,2,3],[4,5,6],[7,8,9]];

addMatrices(arr74, arr75)

function addMatrices(arr75, arr74) {
  let result = [];
  for (let i = 0; i < arr75.length; i++) {
    result[i] = [];
    for (let j = 0; j < arr75[i].length; j++) {
      result[i][j] = arr75[i][j] + arr74[i][j];
    }
  }
  console.log(result);
}
// Output: [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]


// SEARCHING
// Linear Search ## target - 6

let arr76 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 6
for (let i = 0; i < arr76.length -1; i++) {
      if (arr76[i]=== target1) {
           console.log(i); 
      }
}

// Binary Search ## target - 6

let arr77 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target2 = 7;

if (arr77.length === 1) {
    console.log(arr77[0]);
} else {
    let start = 0;
    let end = arr77.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr77[mid] === target2) {
            console.log(mid);
            break;
        }

        if (target2 > arr77[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

// SORTING

// Bubble sort

let arr78 = [8, 2, 7, 4, 5, 10, 1, 3, 9, 6];
let temp;
for (let i = 0; i < arr78.length-1; i++) {
  for (let j = 0; j < arr78.length-1-i; j++) {
    if (arr78[j] > arr78[j+1]) {
      temp = arr78[j];
      arr78[j] = arr78[j+1];
      arr78[j+1] = temp
    }
  }
}
  console.log(arr78);



// Selection Sort

let arr79 = [8, 2, 7, 4, 5, 10, 1, 3, 9, 6];

for (let i = 0; i < arr79.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr79.length; j++) {
        if (arr79[j] < arr79[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        let temp = arr79[i];
        arr79[i] = arr79[minIndex];
        arr79[minIndex] = temp;
    }
}

console.log(arr79);

// Quick Sort
// Quick Sort function
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotElement = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivotElement, quickSort(right));
}

let arr80 = [8, 2, 7, 4, 5, 10, 1, 3, 9, 6];
let sortedArr80 = quickSort(arr80);

console.log(sortedArr80);


// write a function in that to find the second largest element in an array

function secondLargestElement(arr81) {
  const arr82 = quickSort(arr81);

  function quickSort(arr81) {
    if (arr81.length <= 1) {
      return arr81;
    }
    
    const pivotElement = arr81[arr81.length - 1];
    const right = [];
    const left = [];

    for (let i = 0; i < arr81.length - 1; i++) {
      if (arr81[i] > pivotElement) {
        right.push(arr81[i]);
      } else {
        left.push(arr81[i]);
      }
    }

    // left + pivotElement + right
    return [...quickSort(left), pivotElement, ...quickSort(right)];
  }

  return arr82[arr82.length - 2];
}

const arr81 = [8, 2, 7, 4, 5, 10, 1, 3, 9, 6];
let answer = secondLargestElement(arr81);
console.log(answer); // Output: 9

//write a function to find longest squance of consecutive numbers in an array
function longestSequence(arr83) {
  if (arr83.length === 0) return [];

  let currentSequence = [arr83[0]];
  let longestSequence = [arr83[0]];

  for (let i = 1; i < arr83.length; i++) {
    if (arr83[i] === arr83[i - 1] + 1) {
      currentSequence.push(arr83[i]);
    } else {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      currentSequence = [arr83[i]];
    }
  }

  // Check the last sequence
  if (currentSequence.length > longestSequence.length) {
    longestSequence = currentSequence;
  }

  return longestSequence;
}

let arr83 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let newAnswer = longestSequence(arr83);
console.log(newAnswer);


// Write a Function to remove all the Dublicate elements from the array

function removeDuplicateElements(arr84) {
  let removeDuplicateArray = [];
  let seen = new Set();

  for (let i = 0; i < arr84.length; i++) {
    if (!seen.has(arr84[i])) {
      seen.add(arr84[i]);
      removeDuplicateArray.push(arr84[i]);
    }
  }

  return removeDuplicateArray;
}

let arr84 = [2, 4, 4, 5, 7, 7, 8, 9, 10, 10];

console.log(removeDuplicateElements(arr84));

// Write a Function to rotate a Array with n Numbers

function rotateArray(arr85, n) {
  n = n % arr85.length;

  // Split the array into two parts and concatenate them in reverse order
  let rotatedArray = arr85.slice(-n).concat(arr85.slice(0, -n));

  return rotatedArray;
}

let arr85 = [2, 3, 4, 5, 6];
console.log(rotateArray(arr85, 2)); 
// Output: [5, 6, 2, 3, 4]

// Write a Function to Find the missing number in array 

function findMissingNumber(arr86) {
  for (let i = 1; i <= 10; i++) {
    let yes = arr86.includes(i);
    if (!yes) {
      return i;
    }
  }
  
}

let arr86 = [1,2,3,4,5,7,8,9,10];
console.log(findMissingNumber(arr86));

// Write a Function to Two Sum : Given an array of integers and a target sum, return indices of the two numbers such that they add up to the target.

function twoSum(arr87, sum) {
  let twoSumArray = []
  for (let i = 0; i < arr87.length; i++) {
    for (let j = i; j < arr87.length; j++) {
      if (i!==j) {
        if(arr87[i] + arr87[j] === sum){
          twoSumArray.push(arr87[i])
          twoSumArray.push(arr87[j])
        }
      }
    }
  }
  return twoSumArray;
}

let arr87 = [1,2,3,4,6,7,8,9,10];
console.log(twoSum(arr87, 19));