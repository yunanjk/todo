<template>
  <div class="container">
    <h1 class="text-center">Todo App</h1>
    <input v-model="todoText" @keyup.enter="addTodo" type="text" class="w-100 p-2" placeholder="Type todo">
    <hr>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo
  },
  data() {
    return {
      todos: [
        { id: 1, text: "buy a car", checked: true },
        { id: 2, text: "play game", checked: false }
      ],
      todoText: ""
    }
  },
  methods: {
    addTodo(e) {
      // console.log(e);
      // console.log(e.target.value);
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      });
      this.todoText = "";
    }
  }
}
</script>