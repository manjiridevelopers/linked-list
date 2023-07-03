import { LinkedList } from "../construct-linked-list.mjs";

class RemoveNthFromLast extends LinkedList {
  removeNthFromLast(n) {
    let fast = this.head;
    let slow = this.head;
    let elToRemove = null;

    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }

    elToRemove = slow.next;
    slow.next = elToRemove.next;
  }
}

const ll = new RemoveNthFromLast();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(7);
ll.add(9);
ll.removeNthFromLast(3);

console.log(ll);
