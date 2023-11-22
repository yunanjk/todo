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
            // console.log(e.targe.value);
            // this.$emit("add-todo", e.target.value);

            // mutations 사용법
            // 1번째인자: 사용할 함수명, 2번째인자: value값
            // this.$store.commit("ADD_TODO", e.target.value);
            // this.todoText = "";

            // actions 사용법
            this.$store.dispatch("addTodo", e.target.value);
            this.todoText = "";
        }
    }
}
</script>
