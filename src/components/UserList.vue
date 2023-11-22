<template>
    <h3>User List</h3>
    <div v-for="(user, index) in users" :key="index">{{ user.name }}</div>
</template>

<script>
// import axios from "axios";

export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.getUsers();
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    methods: {
        getUsers() {
            // axios.get("https://jsonplaceholder.typicode.com/users")
            // .then((res) => {
            //     // console.log(res);
            //     this.users = res.data;
            // });
            
            this.$store.dispatch("getUsers",)
        }
    }
}
</script>
