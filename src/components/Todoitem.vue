<template>
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bigColor}">
      <label>
        <input type="checkbox" v-model="todo.complete"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="remove(index)">删除</button>
    </li>
</template>

<script>
  export default {
    props:{
      todo:Object,
      todos:Array,
      index:Number
    },
    data(){
      return{
        bigColor:'white',
        isShow:false
      }
    },
    methods:{
      remove(index){
        this.todos.splice(index,1);
        this.save()
      },

      save(){
          localStorage.todos = JSON.stringify(this.todos);
      },

      handleEnter(isEnter){
        if(isEnter){
          this.bigColor="#51352e"
          this.isShow=true
        }else{
          this.bigColor="white"
          this.isShow=false
        }

      }

    }
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
