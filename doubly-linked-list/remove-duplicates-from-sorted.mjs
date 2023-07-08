import { DoublyLinkedList } from "../construct-doubly-linked-list.mjs";

function removeDuplicates(dll) {
  let current = dll.head;

  while (current && current.next) {
    let after = current.next;

    if (current.element == after.element) {
      let afterAfter = after.next;

      if (afterAfter) {
        current.next = afterAfter;
        afterAfter.prev = current;
      } else {
        current.next = null;
        dll.tail = current;
      }
    } else {
      current = current.next;
    }
  }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(2);
dll.push(3);
dll.push(3);
dll.push(4);
dll.push(4);
dll.push(4);

removeDuplicates(dll);
console.log(dll);
