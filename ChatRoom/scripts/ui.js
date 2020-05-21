class ChatUI{

    constructor(list){
        this.list = list;
    }

    clear(){
        this.list.innerHTML = '';
    }

    render(data){
const when = dateFns.distanceInWordsToNow(
    data.created_at.toDate(),
    { addsuffix: true}
);


        const html = `
        <li class = "list-group_item">
        
       <span class = "name">${data.name}</span> 
       <span class = "message">${data.message}</span>
       <div class ="time">${data.created_at.toDate()}</div> 
         </li>
        
     `;

      this.list.innerHTML += html;
    }
}