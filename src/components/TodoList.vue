<template>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" @toggle-checkbox="toggleCheckbox" @click-delete="clickDelete" />
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
    components: {
        Todo
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit("toggle-checkbox", value);
        },
        clickDelete(todoId) {
            this.$emit("click-delete", todoId);
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    }
}
</script>
