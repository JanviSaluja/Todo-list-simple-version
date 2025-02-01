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
    todo.forEach((todoObject,index)=>{
        const {name,date}=todoObject;
        const html=`
            <div>${name}</div>
            <div>${date}</div>
            <button class="delete-button"
                onclick=" 
                todo.splice(${index},1)
                display()">Delete</button>
        `;
        todohtml+=html;
    })
    document.querySelector('.display-js').innerHTML=todohtml;
}