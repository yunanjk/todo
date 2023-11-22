<template>
    <input v-model="todoText" @keyup.enter="addTodo" type="text" class="w-100 p-2" placeholder="Type todo">
</template>

<script>
export default {
    data() {
        return {
            todoText: ""
        }
    },
    methods: {
        addTodo(e) {
            this.$emit("add-todo", e.target.value);
        }
    }
}
</script>
