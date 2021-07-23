<template>
  <div class="todo-container">
    <h2 style="margin-left: 230px;font-weight: normal;">我的Todolist</h2>
    <div class="todo-wrap">
       <Todoheader :addTodo="addTodo" :todos="todos"/>
       <Todolist :todos="todos"/>
       <Todofooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
    <h2 style="margin-left: 230px;margin-top: 60px;font-weight: normal;">我的echart</h2>
    <liness></liness>
  </div>
</template>

<script>
  import Todoheader from './components/Todoheader.vue'
  import Todofooter from './components/Todofooter.vue'
  import Todolist from './components/Todolist.vue'
  import liness from './components/linechart.vue'
  export default {
    name: 'App',
    components: {
      Todoheader,
      Todofooter,
      Todolist,
      liness
    },

    data (){
      return {
        todos: [
          {title: '吃饭', complete: true},
          {title: '睡觉', complete: true},
          {title: '打代码', complete: false},
        ]
      }
    },

    created () {
      let todos = localStorage.todos;
      if (todos) {
        this.todos = JSON.parse(todos);
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
     selectAllTodos(check){
       this.todos.forEach(todo =>todo.complete=check);
      },
      deleteCompleteTodos(){
        this.todos=this.todos.filter(todo =>!todo.complete)
        this.save()
      },
      save(){
        localStorage.todos = JSON.stringify(this.todos);
      }
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
