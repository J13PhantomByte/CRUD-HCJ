document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(itemInput.value);
        itemInput.value = '';
    });
    
    function addItem(item) {
        const li = document.createElement('li');
        li.textContent = item;
        
        const actions = document.createElement('div');
        actions.classList.add('actions');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editItem(li));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteItem(li));
        
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        li.appendChild(actions);
        
        itemList.appendChild(li);
    }

    function editItem(li) {
        const newValue = prompt('Edit item', li.firstChild.textContent);
        if (newValue) {
            li.firstChild.textContent = newValue;
        }
    }

    function deleteItem(li) {
        if (confirm('Are you sure you want to delete this item?')) {
            itemList.removeChild(li);
        }
    }
});