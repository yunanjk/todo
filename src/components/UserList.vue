<template>
    <h3>User List</h3>
    <div v-for="(user, index) in users" :key="index">{{ user.name }}</div>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.getUsers();
    },
    computed: { // mapState, mapGetters 사용시 computed에 작성
        // users() {
        //     return this.$store.state.users;
        // },
        // todos() {
        //     return this.$store.state.todos;
        // }

        // state에서 사용하고자 하는 data가 1개 이상일때 map헬퍼 사용
        ...mapState([
            "users",
            // "todos"
        ])
    },
    methods: { // mapActions, mapMutations 사용시 methods에 작성
        // getUsers() {
        //     // axios.get("https://jsonplaceholder.typicode.com/users")
        //     // .then((res) => {
        //     //     // console.log(res);
        //     //     this.users = res.data;
        //     // });
            
        //     this.$store.dispatch("getUsers");
        // }

        // getters에서 사용하고자 하는 것이 1개 이상일때 map헬퍼 사용
        ...mapActions([
            "getUsers"
        ])
    }
}
</script>
