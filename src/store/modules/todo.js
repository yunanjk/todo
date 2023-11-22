import { createStore } from "vuex";

export default createStore({
    namespaced: true,
    // 로직 순서: actions에서 비동기 작업 -> mutations에서 commit  -> state 변경
    state() { // data
        return { 
            todos: [
                { id: 1, text: "buy a car", checked: true },
                { id: 2, text: "play game", checked: false }
            ]
        }
    },
    mutations: { // mutations를 통해서만 데이터 변경 가능
        // 첫번째인자: 데이터(=state), 두번째인자: 사용시 넘어오는 데이터(=payload)
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, id) {
            // 방법1
            // const index = state.todos.findIndex(todo => {
            //     return todo.id === id;
            // });
            // state.todos.splice(index, 1);

            // 방법2
            state.todos = state.todos.filter(todo => todo.id !== id);
        }
    },
    actions: { // methods(비동기)
        // 첫번째인자: context(commit, dispatch 등 들어있음), 두번째인자: 사용시 넘어오는 데이터(=payload)
        addTodo({ commit }, value) {
            // console.log(value);
            // 비동기 들어갈 자리
            // commit("ADD_TODO", value);

            setTimeout(function() { // db연결 안되어있으므로 setTimeout으로 비동기작업 처리함
                commit("ADD_TODO", value);
            }, 500);
            
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function() {
                commit("TOGGLE_TODO", payload);
            }, 500);
        },
        deleteTodo({ commit }, id) {
            setTimeout(function() {
                commit("DELETE_TODO", id);
            }, 500);
        }
    },
    getters: { // computed(계산)
        numberOfCompletedTodo: (state) => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
})