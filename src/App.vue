<template>
  <div class="container">
    <h1 class="text-center">Todo App</h1>
    <input v-model="todoText" @keyup.enter="addTodo" type="text" class="w-100 p-2" placeholder="Type todo">
    <hr>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" @toggle-checkbox="toggleCheckbox" @click-delete="clickDelete" />
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
    },
    toggleCheckbox({ id, checked }) { // 자식 프로퍼티(Todo.vue)에서 $emit()의 인자로 보낸 id, checked 2개를 파라미터로 사용 (구조분해방식사용)
      // console.log(id, checked);
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    clickDelete(id) {
      // 방법1 (splice() 사용)
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);

      // 방법2 (filter() 사용)
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>