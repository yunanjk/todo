<template>
  <div class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo @add-todo="addTodo" />
    <hr>
    <TodoList @toggle-checkbox="toggleCheckbox" @click-delete="clickDelete" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";

export default {
  name: "App",
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      todoText: ""
    }
  },
  methods: {
    addTodo(value) {
      // console.log(e);
      // console.log(e.target.value);
      console.log(value);
      this.todos.push({
        id: Math.random(),
        text: value,
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