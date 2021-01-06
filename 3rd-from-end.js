/*Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.*/

const { main } = require('./singly-linked-list');
let SSL = main();

function thirdFromLast(list){
    let thirdNode = list.head
    if(!thirdNode.next.next){
        return 'list is shorter than 3 items'
    }
    while(thirdNode.next.next.next !== null){
        thirdNode = thirdNode.next
    }
    return thirdNode
}

console.log(thirdFromLast(SSL))