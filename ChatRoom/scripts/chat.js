class Chatroom{
constructor(room, name){
this.room = room;
this.name = name;
this.chat = db.collection('chat');
this.unsub;
}
async addChat(message){
// format a chat object
const now  = new Date();
const chats = {
    message,
    name: this.name,
    room: this.room,
    created_at: firebase.firestore.Timestamp.fromDate(now)

};
//save the chat document
const response = await this.chat.add(chats);
return response;
}

getChats(callback){
   this.unsub = this.chat
   .where('room' , '==' , this.room) 
   .orderBy('created_at')
    .onSnapshot(snapshot => {
snapshot.docChanges().forEach(change => {
if(change.type === 'added'){
//update the ui
callback(change.doc.data());

}

});

 });
}
updateName(name){
    this.name = name;
    localStorage.setItem('name' , name);
}
updateRoom(room){
    this.room = room;
    console.log('room updated');
    if(this.unsub){
        this.unsub();
    }
    
}

}


setTimeout(() => {
chatroom.updateRoom('gaming');
chatroom.updateName('yoshi');
chatroom.getChats((data) => {
    console.log(data);
});

chatroom.addChat('hello')

}, 3000);