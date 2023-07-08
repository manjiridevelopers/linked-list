import { LinkedList } from "../construct-linked-list.mjs";

function yLinkedListCreator(ll1, ll2, index) {
  let count = 0;
  let currentLl1 = ll1.head;
  let currentLl2 = ll2.head;

  while (currentLl2.next) {
    currentLl2 = currentLl2.next;
  }

  while (currentLl1 && count !== index) {
    currentLl1 = currentLl1.next;
    count++;
  }

  currentLl2.next = currentLl1;
}

function intersectionPointOfY(ll1, ll2) {
  if (ll1 == null || ll2 == null) return "No intersection!";

  let head1 = ll1.head;
  let head2 = ll2.head;

  while (head1 !== head2) {
    head1 = head1 == null ? ll2.head : head1.next;
    head2 = head2 == null ? ll1.head : head2.next;
  }

  return head1;
}

const ll1 = new LinkedList();
const ll2 = new LinkedList();

ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(4);
ll1.add(5);

ll2.add(6);
ll2.add(7);
ll2.add(8);

yLinkedListCreator(ll1, ll2, 2);

const result = intersectionPointOfY(ll1, ll2);
console.log("Result:", result);
