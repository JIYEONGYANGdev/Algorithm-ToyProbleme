// 삽입 정렬로 오름차순 정렬, 정수 요소 배열 인자로 들어옴

// naive solution
const insertionSort = (arr) => {
  let sorted = [arr[0]];
  //삽입 정렬이므로 기준으로 요소 한개를 등록하여 시작,
  // 모든 요소를 순회하며 비교하여 앞/뒤 에 추가
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) { // 해당 인덱스의 직전 요소와 비교
      sorted.push(arr[i])
    } else { // 작을 경우 앞 인덱스들과도 비교해야 함
      for (let j = 0; j < i; j++) {
        if (arr[i] <= sorted[j]) {
          let left = sorted.slice(0, j);
          let right = sorted.slice(j);
          sorted = [...left, arr[i], ...right];
          break; // <- break 해야하는 이유? 
        }
      }
    }
  }
  return sorted;
}

console.log(insertionSort([2,5,1,13,40]))