export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    let current = this.head;

    if (current == null) this.head = node;
    else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "Invalid Position!";
    }

    let position = 0;
    let prev = null;
    let current = this.head;
    let node = new Node(element);

    if (index == 0) {
      node.next = current;
      this.head = node;
    } else {
      while (position < index) {
        prev = current;
        current = current.next;
        position++;
      }
      prev.next = node;
      node.next = current;
    }

    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return "Invalid index!";
    }

    let position = 0;
    let prev = null;
    let current = this.head;

    if (index == 0) {
      this.head = this.head.next;
    } else {
      while (position < index) {
        prev = current;
        current = current.next;
        position++;
      }
      prev.next = current.next;
    }

    this.size--;

    return current.element;
  }

  removeElement(element) {
    let prev = null;
    let current = this.head;
    let position = 0;

    while (current.next !== null) {
      if (current.element == element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return position;
      }
      position++;
      prev = current;
      current = current.next;
    }
    return -1;
  }

  printList() {
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }
}

// let l1 = new LinkedList();
// l1.add(5);
// l1.add(7);
// l1.add(9);
// l1.add(10);

// l1.insertAt(8, 2);

// const removedElement = l1.removeFrom(2);
// console.log("Removed element:", removedElement);

// l1.insertAt(8, 2);

// const removedIdx = l1.removeElement(8);
// console.log("Removed Idx:", removedIdx);

// console.log("Size of linked list:", l1.size);

// console.log(l1);
