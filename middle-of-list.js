/*Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.*/

const { main } = require('./singly-linked-list')
let SSL = main()

function midList(list) {
    let singleNode = list.head
    let doubleNode = list.head

    while (singleNode.next !== null && doubleNode.next !== null) {
        singleNode = singleNode.next
        doubleNode = doubleNode.next.next
    }
    return singleNode
}

console.log(midList(SSL))