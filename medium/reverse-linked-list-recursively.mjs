import { LinkedList } from "../construct-linked-list.mjs";

class reverseLinkedList extends LinkedList {
  reverseRecursively(currentNode, prevNode) {
    if (!currentNode) {
      return (this.head = prevNode);
    }

    let nextNode = currentNode.next;
    currentNode.next = prevNode;

    this.reverseRecursively(nextNode, currentNode);
  }

  reverse() {
    this.reverseRecursively(this.head, null);
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
