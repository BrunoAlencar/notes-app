function addItem(event){
    event.preventDefault();
    const myList = document.getElementById('my-list');
    const inputItem = document.getElementById('new-item');
    const item = document.createElement('li');
    const pItem = document.createElement('p')
    const deleteItem = document.createElement('button')
    deleteItem.innerHTML = 'X'
    deleteItem.onclick = function () {
        myList.removeChild(item)
    }
    pItem.innerText = inputItem.value;
    item.appendChild(pItem)
    item.appendChild(deleteItem)
    myList.appendChild(item)
    inputItem.value = '';
}