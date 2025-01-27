//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const friendList = [];
const inputName = document.querySelector('#amigo');
const labelInputName = document.querySelector('label');
const list = document.querySelector('#listaAmigos');
const secretFriend = document.querySelector('#resultado');

inputName.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        inputName.classList.remove('input-name-error');
        labelInputName.classList.add('hidden');
        labelInputName.innerText = '';
    }
})
function showError(text) {
    inputName.classList.add('input-name-error');
    labelInputName.classList.remove('hidden');
    labelInputName.innerText = text;
    inputName.value = '';
}
function addFriend() {
    const friend = inputName.value;
    if (!friend) {
        showError('Insira um nome para adicionar a lista');
        return;
    }
    if (friendList.includes(friend)) {
        showError('Nome já existe na lista');
        return
    }
    inputName.value = '';
    friendList.push(friend);
    incrementListFriendsInHtml();
}

function incrementListFriendsInHtml() {
    list.innerHTML = ''
    friendList.forEach(name => {
        const li = document.createElement('li');
        const friend = document.createTextNode(name);
        li.appendChild(friend);
        list.appendChild(li);
    })
}
function drawFriend() {
    const number = Math.floor(Math.random() * friendList.length);
    list.innerHTML = '';
    secretFriend.innerText = `O amigo secreto sorteado foi: ${friendList[number]} !`;
}
