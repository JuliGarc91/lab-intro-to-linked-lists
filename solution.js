const { nums, words } = require("./data/data.js");
// import { inspect } from "util"; // npm i util to install; to load this ES module, set "type": "module" in the package.json
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
// console.log(inspect())
module.exports = {
  Node,
  LinkedList,
};
