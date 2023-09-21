const List = document.getElementById('list');

function AddItem() {
    const InputAdd = document.getElementById('input-add').value.trim();
    if (InputAdd === '') {
        return;
    }

    const li = document.createElement('li')
    li.className = 'task-item'

    li.innerHTML = `
        <input class='checks' type="checkbox">
        <span>${InputAdd}</span>
        <button class="remove-button">Excluir</button>
    `;
    List.appendChild(li)

    const removeButton = li.querySelector('.remove-button')
    removeButton.addEventListener('click', () => {
        li.remove() 
    });

    const CheckBox = li.querySelector('.checks')
    CheckBox.addEventListener('change', () => {
        li.classList.toggle('completed')
        if (li.classList.contains('completed')) {
            li.style.backgroundColor = '#c4ffa9' 
        } else {
            li.style.backgroundColor = '#fff'
        }
    })

    document.getElementById('input-add').value = '';
}

var n = 1;
var UrlImage = [
    'url(components/backgrounds/1.jpg',
    'url(components/backgrounds/2.jpg',
    'url(components/backgrounds/3.jpg',
    'url(components/backgrounds/4.jpg',
    'url(components/backgrounds/5.jpg',
    'url(components/backgrounds/6.jpg',
    'url(components/backgrounds/7.jpg',
    'url(components/backgrounds/8.jpg',
    'url(components/backgrounds/9.jpg'
]

function ChangeBackground() {
    n++
    if (n == 9) {
        n = 0
    }
    document.body.style.backgroundImage = UrlImage[n]
    document.body.main.style.backgroundImage = UrlImage[n]
    
}