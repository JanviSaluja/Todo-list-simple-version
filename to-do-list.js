const todo=[];


function add(){
    const inputElement=document.querySelector('.input-js');
    const todoitem=inputElement.value;
    const dateinputElement=document.querySelector('.due-date-js');
    const duedate =dateinputElement.value;
    todo.push({name:todoitem,date:duedate});
    inputElement.value='';
    dateinputElement.value ='';
    display();
}

function display(){
    let todohtml='';
    for(let i=0; i<todo.length; i++){
        const name= todo[i].name;
        const duedate= todo[i].date;
        const html=`
            <div>${name}</div>
            <div>${duedate}</div>
            <button class="delete-button"
                onclick=" 
                todo.splice(${i},1)
                display()">Delete</button>
        `;
        todohtml+=html;
    }
    document.querySelector('.display-js').innerHTML=todohtml;
}