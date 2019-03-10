const button = document.querySelector('#enter');
const input = document.querySelector('#userinput');
const ul = document.querySelector('ul');
const clearItem = document.querySelector('#clear');

const checkInputLength = () => {
    return input.value.length;
}

const createListElement = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';


    // add style to the created list-item
    li.classList.add('list-creation');

    // toggles list item on click
    const toggleListItemOnclick = () => {
        li.classList.toggle('done');
    }
    li.addEventListener('click', toggleListItemOnclick);

    // function to perform deletion
    const deleteListItem = () => {
        li.classList.add('delete');
    }


    // create delete buttons Icon next to each list item 
    const delButton = document.createElement('i');
    delButton.classList.add('fa', 'fa-trash');
    li.appendChild(delButton);
    delButton.addEventListener('click', deleteListItem);

    // add style to the created button Icon
    delButton.classList.add('btn-icon');

}

// add list after button click
const addListAfterClick = () => {
    if (checkInputLength() > 0) {
        createListElement();
    }
}
// add list after enter btn key press
const addListAfterKeypress = () => {
    if (checkInputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// function to clear list item after adding items
const clearListItem = () => {
    ul.innerHTML = '';
}

clearItem.addEventListener('click', clearListItem)
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
