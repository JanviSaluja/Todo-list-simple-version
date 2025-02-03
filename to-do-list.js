const todo=[];

document.querySelector('.js-add-button').addEventListener('click',()=>{
    add();
})

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
    todo.forEach((todoObject)=>{
        const {name,date}=todoObject;
        const html=`
            <div>${name}</div>
            <div>${date}</div>
            <button class="delete-button js-delete-button">Delete</button>
        `;
        todohtml+=html;
    })
    document.querySelector('.display-js').innerHTML=todohtml;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todo.splice(index,1)
            display()
        });
    });
}