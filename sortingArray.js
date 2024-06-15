// BUBBLE SORT

let nums = [3, 5, 6, 2, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length - i - 1; j++) {
    if (nums[j] > nums[j + 1]) { 
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

console.log("Sorted array: BUBBLE SORT ::", nums);
// Time Complexity: Worst: O(n^2), Average: O(n^2), Best: O(n)


// SELECTION SORT

let nums1 = [3, 5, 6, 2, 6, 7, 8, 9];

for (let i = 0; i < nums1.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < nums1.length; j++) {
    if (nums1[j] < nums1[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = nums1[minIndex];
    nums1[minIndex] = nums1[i];
    nums1[i] = temp;
  }
}

console.log("Sorted array: SELECTION SORT ::", nums1);
// Time Complexity: Worst: O(n^2), Average: O(n^2), Best: O(n^2)


// INSERTION SORT

let nums2 = [3, 5, 6, 2, 6, 7, 8, 9];

for (let i = 1; i < nums2.length; i++) {
  let temp = nums2[i];
  let j = i - 1;
  while (j >= 0 && nums2[j] > temp) {
    nums2[j + 1] = nums2[j];
    j--;
  }
  nums2[j + 1] = temp;
}

console.log("Sorted array: INSERTION SORT ::", nums2);
// Time Complexity: Worst: O(n^2), Average: O(n^2), Best: O(n)


// MERGE SORT

let nums3 = [3, 5, 6, 2, 6, 7, 8, 9];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log("Sorted array: MERGE SORT ::", mergeSort(nums3));
// Time Complexity: Worst: O(n log n), Average: O(n log n), Best: O(n log n)


// QUICK SORT

let nums4 = [3, 5, 6, 2, 6, 7, 8, 9];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Sorted array: QUICK SORT ::", quickSort(nums4));
// Time Complexity: Worst: O(n^2), Average: O(n log n), Best: O(n log n)


// HEAP SORT

let nums5 = [3, 5, 6, 2, 6, 7, 8, 9];

function heapSort(arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
  for (let i = len - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    len--;
    heapify(arr, 0, len);
  }
  return arr;
}

function heapify(arr, i, len) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, largest, len);
  }
}

console.log("Sorted array: HEAP SORT ::", heapSort(nums5));
// Time Complexity: Worst: O(n log n), Average: O(n log n), Best: O(n log n)


// SHELL SORT

let nums6 = [3, 5, 6, 2, 6, 7, 8, 9];

function shellSort(arr) {
  let len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

console.log("Sorted array: SHELL SORT ::", shellSort(nums6));
// Time Complexity: Worst: O(n^2), Average: O(n log n), Best: O(n log n)


// COUNTING SORT

let nums7 = [3, 5, 6, 2, 6, 7, 8, 9];

function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}

console.log("Sorted array: COUNTING SORT ::", countingSort(nums7));
// Time Complexity: Worst: O(n + k), Average: O(n + k), Best: O(n + k)


// RADIX SORT

let nums8 = [3, 5, 6, 2, 6, 7, 8, 9];

function countingSortForRadix(arr, exp) {
  let output = new Array(arr.length);
  let count = new Array(10).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  let max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }
  return arr;
}

console.log("Sorted array: RADIX SORT ::", radixSort(nums8));
// Time Complexity: Worst: O(d(n + k)), Average: O(d(n + k)), Best: O(d(n + k))

// BUCKET SORT

let nums9 = [3, 5, 6, 2, 6, 7, 8, 9];

function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    arr.push(...buckets[i]);
  }

  return arr;
}

console.log("Sorted array: BUCKET SORT ::", bucketSort(nums9));
// Time Complexity: Worst: O(n^2), Average: O(n + k), Best: O(n + k)


// COMB SORT

let nums10 = [3, 5, 6, 2, 6, 7, 8, 9];

function combSort(arr) {
  let gap = arr.length;
  let swapped = true;
  while (gap > 1 || swapped) {
    swapped = false;
    gap = Math.floor(gap / 1.3);
    if (gap < 1) {
      gap = 1;
    }
    for (let i = 0; i < arr.length - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        let temp = arr[i];
        arr[i] = arr[i + gap];
        arr[i + gap] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

console.log("Sorted array: COMB SORT ::", combSort(nums10));
// Time Complexity: Worst: O(n^2), Average: O(n^2/log n), Best: O(n log n)
