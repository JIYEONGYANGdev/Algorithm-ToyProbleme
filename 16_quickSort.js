// 정수 배열을 입력받아 오름차순 정렬
// naive solution
// function quickSort(arr) {
//   let pivot = arr[0]; // 기준점
//   let leftIdx = 1,
//     rightIdx = arr.length - 1;
  
//   if (arr.length <= 1) return arr;

//   while (leftIdx <= rightIdx) {
//     if (arr[leftIdx] > pivot && pivot > arr[rightIdx]) { // swap 필요
//       [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]]
//       leftIdx++;
//       rightIdx--;
//     }
//     // 아래 두 경우: 오름차순 정렬되어있으므로 넘어가는 부분
//     if (arr[leftIdx] <= pivot) {
//       leftIdx++;
//     }
//     if (arr[rightIdx] >= pivot) {
//       rightIdx--;
//     }
//   }
//   // 여기까지 하면 기준점을 토대로 정렬되었을 것
//   // 처음 기준점이 leftIdx-1 까지 옮겨지고 종료되었을 것임

//   [arr[0], arr[leftIdx - 1]] = [arr[leftIdx - 1], arr[0]]
  
//   // 기준점을 중심으로 나누어서 quick sort 
//   // 원본 배열을 변형해도 된다면,
//   let leftArr = arr.splice(0, leftIdx-1);
//   let mid = arr.splice(0, 1);
//   let rightArr = arr; // leftArr 잘리고 남은 배열

//   return [...quickSort(leftArr), ...mid, ...quickSort(rightArr)]
// }

// advanced solution(callback)
function quickSort(arr, callback = (item) => item) {
  // 정렬을 callback에 맡기는 것임, 어차피 반복적으로 sorting 작업을 돌려야하기 때문에
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [], // 기준점 pivot과 비교해서 작은 수/ 큰 수 1차 정렬할 임시배열
    right = [];
  
  for (let i = 1; i < arr.length; i++) {
    // sort하는 역할 callback으로 위임했다 치면
    if (callback(arr[i]) < callback(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const leftArr = quickSort(left, callback);
  const rightArr = quickSort(right, callback);

  return [...leftArr, pivot, ...rightArr]
}

console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([1, 2, 43, 100, 21]));
console.log(quickSort([20, -10, -11, 2, 29]));