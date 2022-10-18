document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector('form');
  form.addEventListener("submit", function(e){
    if (e.target.new_task_description.value==='') {
      alert('please write a valid task')
    }
   else {
     e.preventDefault();
    buildTodo(e.target.new_task_description.value)
    form.reset();

   }

  })
});

function buildTodo(task){


  let delButton=document.createElement('button');
  delButton.textContent='X'
  let select= document.createElement('select');
  let options= document.createElement('option');
  let options2= document.createElement('option');
  let options3= document.createElement('option');
  options.textContent = 'important';
  options2.textContent = 'medium';
  options3.textContent = 'normal';
  
  const ul=document.getElementById('tasks');
  let li=document.createElement('li');
  li.textContent= `${task} `;
  
  select.appendChild(options);
  select.appendChild(options2);
  select.appendChild(options3);
  li.appendChild(delButton);
  li.appendChild(select);

  ul.appendChild(li);
  if (select.innerText==="important") {
    li.style.colorbackgroundColor ="red"
    
  }  
  delButton.addEventListener('click',handleTodo)

}

function handleTodo(element){
  element.target.parentNode.remove()

}