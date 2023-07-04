import { LinkedList } from "../construct-linked-list.mjs";

function addTwoLinkedList(ll1, ll2) {
  let result = new LinkedList();
  let current1 = ll1.head;
  let current2 = ll2.head;

  let num1 = "";
  let num2 = "";
  let sum = 0;

  while (current1 || current2) {
    if (current1) {
      num1 += current1.element;
      current1 = current1.next;
    }
    if (current2) {
      num2 += current2.element;
      current2 = current2.next;
    }
  }

  sum = parseInt(num1) + parseInt(num2);

  sum
    .toString()
    .split("")
    .map((el) => {
      result.add(el);
    });

  return result;
}

function addTwoLinkedListSecond(ll1, ll2) {
  let result = new LinkedList();
  let current1 = ll1.head;
  let current2 = ll2.head;

  let carry = 0;

  while (current1 || current2 || carry != 0) {
    let sum = 0;

    if (current1) {
      sum += current1.element;
      current1 = current1.next;
    }
    if (current2) {
      sum += current2.element;
      current2 = current2.next;
    }

    sum += carry;
    carry = Math.floor(sum / 10);
    result.add(Math.floor(sum % 10));
  }

  return result;
}

const ll1 = new LinkedList();

ll1.add(2);
ll1.add(2);
ll1.add(1);
ll1.add(1);
ll1.add(0);

const ll2 = new LinkedList();

ll2.add(1);
ll2.add(1);
ll2.add(1);
ll2.add(1);
ll2.add(1);

const result = addTwoLinkedList(ll1, ll2);
const resultSecond = addTwoLinkedListSecond(ll1, ll2);
console.log(result);
console.log(resultSecond);
