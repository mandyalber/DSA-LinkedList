const { LinkedList, _Node } = require('./LinkedList')

/*Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.*/

function main() {
    let SLL = new LinkedList

    let items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck']
    items.forEach(item => SLL.insertLast(item))

    //console.log(JSON.stringify(SLL))

    //Add Tauhida to the list
    SLL.insertLast('Tauhida')
    //console.log(JSON.stringify(SLL))

    //Remove Husker from the list
    SLL.remove('Husker')
    //console.log(JSON.stringify(SLL))

    //Add Athena before Boomer using your insertBefore() function
    SLL.insertBefore('Athena', 'Boomer')
    //console.log(JSON.stringify(SLL))

    //Add Hotdog after Helo using the insertAfter() method.
    SLL.insertAfter('Hotdog', 'Helo')
    //console.log(JSON.stringify(SLL))

    //Using the insertAt() method insert Kat in the 3rd position of the list.
    SLL.insertAt('Kat', 3)
    //console.log(JSON.stringify(SLL))

    //Remove Tauhida from the list.
    SLL.remove('Tauhida')
    //console.log(JSON.stringify(SLL))

    return SLL
}

main()

module.exports = { main }