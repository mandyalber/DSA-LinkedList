/*Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.*/

const { main } = require('./singly-linked-list')
let SSL = main()

function reverseList(list) {

    let currentNode = list.head
    let tempNode, previousNode

    while (currentNode) {
        tempNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = tempNode
    }
    list.head = previousNode
    return list   
}

console.log(reverseList(SSL))