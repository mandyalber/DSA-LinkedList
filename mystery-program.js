/*Mystery program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?*/

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
     let ticks = 0
    while (current !== null) {
       
        let newNode = current;
        ticks++
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
            ticks++
        }
        current = current.next;
    }
    return ticks
}
const { main } = require('./singly-linked-list');
let SSL = main()

console.log(WhatDoesThisProgramDo(SSL))
//checks list for duplicates
//Big O is O(n^2) because it has 2 levels of looping
