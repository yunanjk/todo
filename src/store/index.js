import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            // data 
            todos: [
                { id: 1, text: "buy a car", checked: true },
                { id: 2, text: "play game", checked: false }
            ]
        }
    },
    mutations: {
        // mutations를 통해서만 데이터 변경 가능
    },
    actions: {
        // method(함수)
    },
    getters: {
        // computed(계산)
    }
});