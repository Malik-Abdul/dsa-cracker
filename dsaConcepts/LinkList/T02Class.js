// Tutorial
// https://www.youtube.com/watch?v=ZBdE8DElQQU
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const node1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null; // will be empty by default. Which means the list is empty, and there is no first element
    this.size = 0; // by default is 0
  }

  // 1-Insert first node
  // 2-Insert last node
  // 3-Insert at index
  // 4-Get at index
  // 5-Remove at index
  // 6-Clear the list
  // 7-Print the list data

  // 1)
  insertFirst(data) {
    this.head = new Node(data, this.head); // as this.head is null first time
    this.size++;
  }

  // 2)

  insertLast(data) {
    // this.head = new Node(data, this.head); // as this.head is null first time
    // if empty make the head
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      // otherwise
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current.next = new Node(data, this.head);
      current.next = node;
    }
    this.size++;
  }

  // 3)
  insertAt(index, data) {
    if (index > 0 && index > this.size) {
      // check if index is out of range
      return;
    }
    if (index == 0) {
      this.insertFirst(data);
    }
    let node = new Node(data);
    let current, previous;
    current = this.head;

    let count = 0;
    while (count < index) {
      previous = current; // node before the insert
      count++;
      current = current.next; // node after the index
    }
    node.next = current;
    previous.next = node;
    this.size++;
    // console.log(current);
  }

  // 4)
  getAtIndex(index) {
    if (index > 0 && index > this.size) {
      // check if index is out of range
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // 5)

  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      // check if index is out of range
      return;
    }
    let current = this.head;
    if (index == 0) {
      this.head = current.next;
    } else {
      let count = 0;
      let previous;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // 6)

  clearList() {
    this.head = null;
  }

  // 7)
  printListData() {
    let current = this.head;
    // console.log(current);
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const node1 = new LinkedList();
node1.insertFirst(100);
console.log(node1);
// node1.insertFirst(200);
// node1.insertFirst(300);
// node1.insertLast(400);
// node1.insertAt(2, 150);
// node1.insertFirst(300);

// console.log("getAtIndex");
// node1.getAtIndex(3);

// console.log("printListData");
// node1.printListData();

// console.log("removeAtIndex");
// node1.removeAtIndex(1);

// node1.clearList();
// console.log("printListData");
// node1.printListData();
// console.log("getAtIndex");
// node1.getAtIndex(3);

// console.log("node1 ===> ", node1);
