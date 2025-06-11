/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[];
  }

  add(todo)
  {
    this.todos.push(todo);
  }
 update(index,updatedTodo){
   if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo; 
    } 
    else {
      console.log("Invalid index");
 }
}
remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index");
    }
}
getAll()
{
  for(let i=0;i<this.todos.length;i++)
   console.log(this.todos[i]);
}
get(indexOfTodo) 
{
  if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
    return this.todos[indexOfTodo];
  } else {
    console.log("Invalid index");
    return null;
   }
  }
  clear()
  {
    this.todos=[];
  }
}
const myTodo = new Todo();

myTodo.add('Workout for an hour');
myTodo.add('Read a book');
myTodo.getAll();

console.log(myTodo.get(1));  

myTodo.update(1, 'Read two books');
myTodo.getAll();

myTodo.remove(0);
myTodo.getAll();

myTodo.clear();
myTodo.getAll();  

