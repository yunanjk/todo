import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    namespaced: true,
    // 로직 순서: actions에서 비동기 작업 -> mutations에서 commit  -> state 변경
    state: {
        users: []
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },

    actions: {
        getUsers({ commit }) {
            axios.get("https://jsonplaceholder.typicode.com/users")
                . then((res) => {
                    commit("SET_USERS", res.data);
                });
        }
    }
})