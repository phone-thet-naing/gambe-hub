class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n3 = new Node(300)
const n2 = new Node(200, n3);
const n1 = new Node(100, n2);


