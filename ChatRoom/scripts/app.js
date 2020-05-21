
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('new-name');
const updateMsg = document.querySelector('.update-msg');

// add a new chat

newChatForm.addEventListener('submit', e => {
e.preventDefault();
const message = newChatForm.message.value.trim();
chatroom.addChat(message)
.then(() => newChatForm.reset())
.catch(err => console.log(err));

});

//update username

newNameForm.addEventListener('submit' , e => {
    e.preventDefault();

    const newName = newNameForm.name.value.trim();
chatroom.updateName(newName);
// reset the form
newNameForm.reset();
//Show andd hide update message

updateMsg.innerText = `Your name was updated to ${newName}`;
setTimeout(() => updateMsg.innerText = '', 3000);
});

//update the chat room

room.addEventListener('click' ,e=> {
    if(e.target.tagName === 'BUTTON'){

        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})



//check local storage for a name

const name = localStorage.name ? localStorage.name : 'anon';


//class Instances

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');
chatroom.getChats((data) => {
    chatUI.render(data);
});
