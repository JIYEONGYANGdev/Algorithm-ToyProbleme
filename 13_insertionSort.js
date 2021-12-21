// 삽입 정렬로 오름차순 정렬, 정수 요소 배열 인자로 들어옴

// naive solution
// const insertionSort = (arr) => {
//   let sorted = [arr[0]];
//   //삽입 정렬이므로 기준으로 요소 한개를 등록하여 시작,
//   // 모든 요소를 순회하며 비교하여 앞/뒤 에 추가
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= sorted[i - 1]) { // 해당 인덱스의 직전 요소와 비교
//       sorted.push(arr[i])
//     } else { // 작을 경우 앞 인덱스들과도 비교해야 함
//       for (let j = 0; j < i; j++) {
//         if (arr[i] <= sorted[j]) {
//           let left = sorted.slice(0, j);
//           let right = sorted.slice(j);
//           sorted = [...left, arr[i], ...right];
//           break; // <- break 해야하는 이유? 
//         }
//       }
//     }
//   }
//   return sorted;
// }

// advanced solution (callback)
const insertionSort = function(arr, transform = (sthEleInArr) => sthEleInArr) {
  //일단 0번째 인덱스 자리를 기준으로 비교, 순차적으로 push해서 새로운 배열 리턴
  // 그 비교를 콜백함수가 함
  let sorted = [arr[0]];
  for(let i = 1; i<arr.length; i++){
    if(transform(arr[i]) >= transform(sorted[i-1])) // 이미 정렬되어 새 배열에 추가된 최근 요소랑 현재 배열의 인덱스와 비교
    {sorted.push(arr[i])
    } else { // arr[i]가 sorted[i-1] 보다 작을 때 -> sorted[i-1]과도 비교를 해야되고
  // 이전 요소랑 반복으로 비교해야 들어갈 위치를 찾을 수 있음
      for(let j = 0; j < i; j++) {
        if(transform(arr[i]) < transform(sorted[j])) { // 위에서 sorted[i-1]보다는 컸으니까 정렬 배열 기준 요소보다는 작은 그 정렬배열의 요소(인덱스) 찾아야하니까.
        let templeft = sorted.slice(0,j);
        let tempright = sorted.slice(j);
        // 사이에 넣기 위해 쪼개었다가 합칠 수 밖에 없는 듯.
        sorted = templeft.concat(arr[i], tempright);
        break; // 그리고 멈춰 다음 요소 비교 위해 넘어가야 함.
        }
      }
    }
  }
  return sorted; // 정렬된 배열을 리턴함 => 배열 요소 들어가서 배열 요소 반환하는 transform 콜백함수에 거쳐나온 요소가 정렬된 최종 결과
}


console.log(insertionSort([2,5,1,13,40]))