class NodeTest {
  public data: number;
  public next: null | NodeTest;
  constructor(data: number, next: null | NodeTest = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkList {
  private head;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertion(data: number) {
    if (!this.head) {
      this.head = new NodeTest(data, this.head);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new NodeTest(data);
    }
    this.size++;
  }
  deletion(index: number) {
    if (index >= this.size || index < 0 || !this.head) {
      console.log("Error: index is too large");
      return false;
    } else {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let count = 0;
        let current = this.head;
        let prev: NodeTest | null = null;
        while (count < index) {
          count++;
          prev = current;
          current = current.next;
        }
        if (prev) {
          prev.next = current.next;
        }
      }
      this.size--;
      return true;
    }
  }
  showData() {
    console.log("-----Show Data------");

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkList();
list.insertion(15);
list.insertion(25);
list.insertion(26);
list.insertion(27);
list.insertion(29);
list.insertion(31);
list.insertion(34);
list.insertion(36);
list.showData();
list.deletion(6);
list.showData();
