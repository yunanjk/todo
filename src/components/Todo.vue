<template>
    <div>
        <input type="checkbox" :checked="todo.checked">
        <span class="m-3">{{ todo.text }}</span>
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
    }
}
</script>
