const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');
const richestPeople = [
    // ordem do array reflete o mundo real
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
];

// armazena itens da lista
const listItems = [];

let dragStartIndex;

createList();

// insere itens da lista no DOM
function createList() {
    [...richestPeople]
    .map(a => ({ value: a, sortValue: Math.random() }))
    .sort((a, b) => a.sortValue - b.sortValue)
    .map(a => a.value)
    .forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index)

        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);

        draggableList.appendChild(listItem);
    })
}