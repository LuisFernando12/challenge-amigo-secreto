import { Alert } from "./js/alert.js";

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function $(element){
    return document.querySelector(element);
}
const friendList = [];
const listFriendsAlreadyDrawn = [];
const inputName = $('#amigo');
const list = $('#listaAmigos');
const secretFriend = $('#resultado');
$('.button-add').addEventListener('click', addFriend);
$('.button-draw').addEventListener('click', drawFriend);
inputName.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        inputName.classList.remove('input-name-error');
    }
})
function showError(text) {
    inputName.classList.add('input-name-error');
    Alert(text);
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
    if (friendList.length === 0) {
        Alert('A lista de amigos está vazia !', true);
        return
    }
    if(friendList.length === listFriendsAlreadyDrawn.length){
        friendList.length = 0;
        listFriendsAlreadyDrawn.length = 0;
        secretFriend.innerHTML = ''
        return Alert('Todos os amigos já foram sorteados !');
    }
    const number = Math.floor(Math.random() * friendList.length);
    list.innerHTML = '';
    const friendDrawn = friendList[number];
    if(listFriendsAlreadyDrawn.includes(friendDrawn)){
        return drawFriend();
    }
    listFriendsAlreadyDrawn.push(friendDrawn);
    secretFriend.innerText = `O amigo secreto sorteado foi: ${friendDrawn} !`;
}
