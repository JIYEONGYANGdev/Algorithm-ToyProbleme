/*
breadth first search from the start vertex(parameter 'node')

# parameter
  node (Object, with the 'value', 'children' properties)
    - value: nodes' value
    - children: child nodes in array

# Output
  return an array with the values of nodes in order in which they are searched

# etc
  should not change given constructor function & method(addChild)

*/

// first resolution (mine)
// let bfs = function (node) {
//   // bfs 탐색, 시작점 node (값)

//   // 탐색queue, while loop

//   let queue = [node];
//   let result = [];

//   while (queue.length) {
//     let currVertex = queue.shift();
//     result.push(currVertex.value); // 시작점 노드 값 저장

//     // 자식 노드 탐색 - 반복 (for loop)
//     for (let nextVertex of currVertex.children) {
//       queue.push(nextVertex);
//     }
//   }
//   return result;
// };

// reference
let bfs = function (node) {
  let values = []; // to return

  let queue = [node]; // 탐색할 시작점 노드 추가
  
  while (queue.length > 0) { // 탐색 루프
    let currentVertex = queue[0]; // 현재 기준점
    queue = queue.slice(1); // 탐색 큐 업데이트

    values.push(currentVertex.value); // 현재 탐색 노드 값 리턴 배열에 추가

    // console.log(currentVertex.children);
    currentVertex.children.forEach((childNode) => queue.push(childNode)); // 자식 노드 배열 탐색 대기열에 추가
  }
  return values;
}
/*
*/

// * 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// * 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// * membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// # testcase
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]