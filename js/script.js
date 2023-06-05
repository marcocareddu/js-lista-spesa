console.log('JS OK');



// ? FOR *****************************************************************
// // * Phase 1
// // Link DOM element
// const olElement = document.getElementById('list-group');

// // Create array
// const shoppingList = ['latte', 'pane', 'pasta'];

// // Create var
// let printList = '';

// // FOR cicle
// for (let i = 0; i < shoppingList.length; i++) {
//         printList += `<li class="list-group-item">${shoppingList[i]}</li>`;
// }

// // Print list in DOM
// olElement.innerHTML = printList;




// ? WHILE *****************************************************************

// * Phase 1
// Link DOM element
const olElement = document.getElementById('list-group');

// Create array
const shoppingList = ['latte', 'pane', 'pasta'];

// Create var
let printList = '';

// WHILE cicle
let i = 0;
while (i < shoppingList.length) {
    printList += `<li class="list-group-item">${shoppingList[i]}</li>`;

    //Increment index
    i++
}

// Print list in DOM
olElement.innerHTML = printList;