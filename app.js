function addItem(event){
    event.preventDefault();
    const createInput = document.getElementById('new-item');
    if(createInput.value !== ''){
        const myList = document.getElementById('my-list');
        const item = document.createElement('li');
        const inputItem = document.createElement('input')
        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = 'X'
        deleteItem.onclick = function () {
            myList.removeChild(item)
        }
        inputItem.value = createInput.value;
        item.onclick = function () {
            inputItem.disabled = false;
            inputItem.focus();
        }
        inputItem.onblur = function () {
            inputItem.disabled = true;
        }
        inputItem.onkeypress = function (event) {
            if(event.keyCode == 13){
                inputItem.disabled = true;
            }
        }
        inputItem.disabled = true;
        item.appendChild(inputItem)
        item.appendChild(deleteItem)
        myList.appendChild(item)
        createInput.value = '';
    }

}