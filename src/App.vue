<template>
  <div>
    <h1>My Todo List</h1>
    <input v-model="newTodo" placeholder="Add task" @keyup.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <button @click="removeTodo(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = '';
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>
