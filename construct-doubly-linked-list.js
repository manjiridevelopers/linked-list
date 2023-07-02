class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element) {
    let node = new Node(element);

    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      let lastNode = this.tail;

      lastNode.next = node;
      node.prev = lastNode;
      this.tail = node;
    }
    this.size++;
  }

  unshift(element) {
    let node = new Node(element);

    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      let firstNode = this.head;

      node.next = firstNode;
      firstNode.prev = node;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    if (this.size <= 0) return "No elements in the linked list";

    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let lastNode = this.tail;
      let prevOfLastNode = lastNode.prev;
      prevOfLastNode.next = null;
      lastNode.prev = null;
      this.tail = prevOfLastNode;
    }

    this.size--;
  }

  shift() {
    if (this.size <= 0) return "No elements in the linked list";

    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let firstNode = this.head;
      this.head = firstNode.next;
      this.head.prev = null;
    }

    this.size--;
  }

  insertAt(index, element) {
    if (index < 0 && index >= this.size) return "Invalid input!";
    let position = 0;
    let current = this.head;
    let node = new Node(element);

    if (index == 0) return this.unshift(element);
    if (index == this.size - 1) return this.push(element);

    while (current.next !== null) {
      if (position == index) {
        let before = current.prev;
        let after = current;
        after.prev = node;
        node.next = after;
        node.prev = before;
        before.next = node;
        break;
      } else {
        current = current.next;
        position++;
      }
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size - 1) return "Invalid input!";
    let position = 0;
    let current = this.head;

    if (index == 0) return this.shift();
    if (index == this.size - 1) return this.pop();

    while (current.next !== null) {
      if (position == index) {
        let before = current.prev;
        let after = current.next;

        current.next = null;
        current.prev = null;

        before.next = after;
        after.prev = before;
        break;
      } else {
        current = current.next;
        position++;
      }
    }

    this.size--;
  }

  reverse() {
    let current = this.head;
    let head = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp !== null) {
      this.head = temp.prev;
      this.tail = head;
    }
  }
}

let dl1 = new DoublyLinkedList();
dl1.push(1);
dl1.push(2);
dl1.push(3);
dl1.push(4);
dl1.push(5);
dl1.push(6);
dl1.unshift(0);
dl1.pop();
dl1.shift();
dl1.insertAt(3, 4.1);
dl1.removeAt(2);
dl1.reverse();

console.log(dl1);
