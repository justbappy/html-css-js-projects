let list = document.getElementById('list');

function addTask(){
    let task_des = document.getElementById('task-des').value;

    if(task_des == ""){
        alert("enter a task");
    }
    else{
        // creating elements and adding id to it
        let task_list = document.createElement('div');
        task_list.id = 'task-list';

        let tasks = document.createElement('div');
        tasks.id = 'tasks';

        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');

        let span = document.createElement('span');
        span.textContent = task_des;

        let button = document.createElement('button');
        button.innerHTML = '&#10060;';

        // appending childs 
        tasks.appendChild(checkBox);
        tasks.appendChild(span);
        task_list.appendChild(tasks);
        task_list.appendChild(button);
        list.appendChild(task_list);

        // clearing value of input
        document.getElementById('task-des').value = "";

        // adding event to button
        button.addEventListener('click',function(){
            task_list.remove();
        });

        checkBox.addEventListener('click',function(){
            if(checkBox.checked == false){
                span.style.textDecoration = 'none';
                span.style.color = 'black';
            }
            else{
                span.style.textDecoration = 'line-through';
                span.style.color = 'grey';
            }
        });
    }   
}