<template>
    <div>Completed Todo : {{ numberOfCompletedTodo }}</div>
</template>

<script>
export default {
    // state에 있는 data를 가져올때는 computed 안에 작성해주면 됨
    // getters 사용하려면 computed 안에 메소드형식으로 작성해주면 됨
    computed: {
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo() {
            // return this.todos.filter(todo => todo.checked).length;

            // getters 사용법
            return this.$store.getters.numberOfCompletedTodo;
        }
    }
}
</script>
