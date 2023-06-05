console.log('JS OK');


// ? FOR
// * Phase 1
// Link DOM element
const olElement = document.getElementById('list-container');

// Create array
const shoppingList = ['latte', 'pane', 'pasta'];

// Create var
let printList = '';

// FOR cicle
for (let i = 0; i < shoppingList.length; i++) {
    printList += `<li>${shoppingList[i]}</li>`;
}

// Print list in DOM
olElement.innerHTML = printList;