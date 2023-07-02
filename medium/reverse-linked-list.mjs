import { LinkedList } from "../construct-linked-list.mjs";

class reverseLinkedList extends LinkedList {
  reverse() {
    let prev = null;
    let temp = null;
    let currentNode = this.head;

    while (currentNode) {
      temp = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = temp;
    }

    this.head = prev;
  }
}

const ll = new reverseLinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(ll.reverse());
console.log(ll.printList());
