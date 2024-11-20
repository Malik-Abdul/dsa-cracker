class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// console.log(new Node(100));

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertData(data) {
    if (!this.head) {
      this.head = new Node(data, this.head);
    } else {
      const node = new Node(data);
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  printAll() {
    console.log("printAll:");

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getMthToLast(mth) {
    if (mth < 0) {
      console.log(`Invalid value ${mth}`);
    }
    console.log(`getMthToLast: ${mth}`);

    let current = this.head;
    let count = 0;
    if (mth == 0) {
      while (current.next) {
        count++;
        current = current.next;
      }
      console.log(current.data);
    } else {
      while (current) {
        if (count >= mth) {
          console.log(current.data);
        }
        count++;
        current = current.next;
      }
    }
  }
}

const node1 = new LinkedList();
node1.insertData(100);
node1.insertData(200);
node1.insertData(300);
node1.insertData(400);
node1.insertData(500);
node1.insertData(600);

node1.printAll();

node1.getMthToLast(2);
node1.getMthToLast(0);

// console.log(node1);
