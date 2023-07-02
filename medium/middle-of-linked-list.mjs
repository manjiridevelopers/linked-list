import { LinkedList } from "../construct-linked-list.mjs";

class middleOfLinkedList extends LinkedList {
  getMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.element);
  }
}

const ll = new middleOfLinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(ll.getMiddle());
