import { DoublyLinkedList } from "../construct-doubly-linked-list.mjs";

/* using two pointers */

function pairsWithGivenSum(dll, target) {
  let start = dll.head;
  let end = dll.tail;
  let results = [];

  while (start.element < end.element) {
    let currentSum = start.element + end.element;

    if (currentSum == target) {
      results.push([start.element, end.element]);
      start = start.next;
      end = end.prev;
    }
    if (currentSum < target) start = start.next;
    if (currentSum > target) end = end.prev;
  }

  return results;
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
dll.push(7);
dll.push(8);

const results = pairsWithGivenSum(dll, 7);
console.log("Pair with given sum:", results);
