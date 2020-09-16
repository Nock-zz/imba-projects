// Code goes here


class TodoList {

  

  constructor() {
    this.todos = [
    {todoText:'item 1', completed: false},
    {todoText:'item 2', completed: false},
    {todoText:'item 3', completed: false}, 
    {todoText:'item 4', completed: false}
    ];

    let displayTodosButton = document.querySelector('.displayTodosButton');
    let boundDisplayTodos = this.displayTodos.bind(this);
    displayTodosButton.addEventListener('click',function() {
    boundDisplayTodos();
    });

    let toggleAllButton  = document.querySelector('.toggleAllButton');    
    let boundToggleAll = this.toggleAll.bind(this);
    toggleAllButton.addEventListener('click',function() {
      boundToggleAll();
    });

    
    let addTodoButton  = document.querySelector('.addTodoButton');    
    let todoText; 
    let todoPosition;     
    let boundAddTodo = this.addTodo.bind(this);
    
    addTodoButton.addEventListener('click',function() {      
      todoText = document.getElementById("addTodoText"); 
      boundAddTodo(todoText.value);
      todoText.value = '';
    });


    let changeTodoButton  = document.querySelector('.changeTodoButton');
    let boundChangeTodo = this.changeTodo.bind(this);
    
    changeTodoButton.addEventListener('click',function() {      
      todoText = document.getElementById("changeTodoText");
      todoPosition = document.getElementById("changeTodoPosition");
      boundChangeTodo(todoPosition.valueAsNumber,todoText.value);
      todoPosition.value = '';
      todoText.value = '';
    });

    let deleteTodoButton  = document.querySelector('.deleteTodoButton');
    let boundDeleteTodo = this.deleteTodo.bind(this);
    
    deleteTodoButton.addEventListener('click',function() {      
      todoPosition = document.getElementById("deleteTodoPosition");
      boundDeleteTodo(todoPosition.valueAsNumber);
      todoPosition.value = '';    
    });

    let toggleCompletedButton  = document.querySelector('.toggleCompletedButton');    
    let boundToggleCompleted = this.toggleCompleted.bind(this);
    
    toggleCompletedButton.addEventListener('click',function() { 
      todoPosition = document.getElementById("toggleCompletedPosition");
      boundToggleCompleted(todoPosition.valueAsNumber);
      todoPosition.value = '';    
    });

  }


  
  displayTodos() {
   
  let todoUl = document.querySelector('ul');
  todoUl.innerHTML = '';
  for (let i = 0; i < this.todos.length; i++) {
  let li = document.createElement('li');
  
  if (this.todos[i].completed) {
    li.textContent = '(x) ' + this.todos[i].todoText;
  } else {
    li.textContent = '( ) ' + this.todos[i].todoText;
  }  
  todoUl.appendChild(li);
  }
  }


  addTodo(aTodoText) {
    //debugger;
    this.todos.push({todoText: aTodoText, completed: false});
    this.displayTodos();
  }

  changeTodo(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  }

  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }

  toggleCompleted(position) {
    this.todos[position].completed = !this.todos[position].completed
    this.displayTodos();
  }

  toggleAll() {            
      // if everything is true make everything false
      if ((this.todos.filter( (el) => el.completed)).length === this.todos.length) {
        for ( let i =0; i < this.todos.length; i++ ) {
          this.todos[i].completed = !this.todos[i].completed;
        } 
      } else 
      // make everything true
      // if any el is false make it true
      {
        for (let i = 0; i < this.todos.length; i++ ) {
          if (!this.todos[i].completed) { 
            this.todos[i].completed = !this.todos[i].completed;
            }
        } 
      }
      this.displayTodos();
    }

  

}

let todoList = new TodoList();

