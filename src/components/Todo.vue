<template>
    <div class="mb-2 d-flex">
        <!-- {{ todo.checked }} -->
        <div class="m-2">
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
        </div>
        <span class="m-2 flex-grow-1" :class="todo.checked ? 'text-muted' : ''" :style="todo.checked ? 'text-decoration: line-through' : ''">
            {{ todo.text }}
        </span>
        <button class="btn btn-danger btn-sm" @click="clickdelete">delete</button>
    </div>
</template>

<script>
export default {
    name: "TodoComp",
    props: {
        todo: {
            type: Object,
            requried: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            // console.log(e);
            // this.$emit("toggle-checkbox", {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // });

            // mutations 사용법
            // this.$store.commit("TOGGLE_TODO", {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // });

            // actions 사용법
            this.$store.dispatch("toggleTodo", {
                id: this.todo.id,
                checked: e.target.checked
            });
        },
        clickdelete() {
            // this.$emit("click-delete", this.todo.id);

            // mutations 사용법
            // this.$store.commit("DELETE_TODO", this.todo.id);

            // actions 사용법
            this.$store.dispatch("deleteTodo", this.todo.id);
        }
    }
}
</script>
