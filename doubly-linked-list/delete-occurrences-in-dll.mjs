import { DoublyLinkedList } from "../construct-doubly-linked-list.mjs";

function DeleteOccurences(dll, target) {
  let current = dll.head;

  while (current) {
    let before = current.prev;
    let after = current.next;

    if (current.element == target) {
      if (before == null) {
        dll.head = after;
        if (after) {
          after.prev = null;
        } else {
          dll.tail = null;
        }
      } else if (after == null) {
        before.next = null;
        dll.tail = before;
      } else {
        before.next = after;
        after.prev = before;
      }
      current = after;
    } else {
      current = current.next;
    }
  }

  return dll;
}

const dll1 = new DoublyLinkedList();

dll1.push(2);
dll1.push(2);
dll1.push(10);
dll1.push(8);
dll1.push(4);
dll1.push(2);
dll1.push(5);
dll1.push(2);

const result = DeleteOccurences(dll1, 2);
console.log("DLL after deleting target:", result);
