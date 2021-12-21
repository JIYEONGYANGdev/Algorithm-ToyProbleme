// 정수배열을 인자로 받아 오름차순 정렬
// merge sort 하는 함수, merge하는 함수

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;
  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx); // * 주의할 점 기준점 midIdx는 left, right 배열에서 제외

  return merge(mergeSort(left), mergeSort(right)); // left, right 나누어 정렬 => 다시 병합
}
// 두 묶음으로 나누어서 최종 반환 배열에 추가하는 방식
const merge = function (leftArr, rightArr) {
  //정렬된 왼쪽 배열/ 오른쪽 배열을 받아서 병합하는 함수
  let result = [];

  while (leftArr.length !== 0 && rightArr.length !== 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift()); // 정렬된 왼쪽 배열의 요소를 최종정렬 배열에 추가(shift로 원 배열에서는 제거)
    } else {
      result.push(rightArr.shift()); 
    }
  }

  return [...result, ...leftArr, ...rightArr]; 
}

console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(mergeSort([1, 2, 43, 100, 21]));
console.log(mergeSort([20, -10, -11, 2, 29]));