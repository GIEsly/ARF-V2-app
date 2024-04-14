const form = document.querySelector('.inputSection');
const ItemList = document.querySelector('.listItems');
const filter = document.querySelector('.filterSearch');

form.addEventListener('submit', addItem)
ItemList.addEventListener('click', DelButton)
filter.addEventListener('keyup', filterItem)


function addItem(e){
    e.preventDefault()
    
    const list = document.querySelector('.inputText').value
    const li = document.createElement('li')
    li.className = 'list-group'
    li.appendChild(document.createTextNode(list))
    const delBtn = document.createElement('button')
    delBtn.className = 'btnRemove'
    delBtn.appendChild(document.createTextNode('X'))
    li.appendChild(delBtn)

    ItemList.appendChild(li)

    const clear = document.querySelector('.inputText').value = ''
    const focus = document.querySelector('.inputText').focus()


}

function DelButton(e){
    e.preventDefault()
    if(e.target.classList.contains('btnRemove')){
        if(confirm('Are you sure???')){
            const li = e.target.parentElement
            ItemList.removeChild(li)
        }
    }
}

function filterItem(e){
    e.preventDefault()
    
    // converts to lower case
    const text = e.target.value.toLowerCase()
    // Getting all the tag names of li
    const items = ItemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent
        
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })

}

