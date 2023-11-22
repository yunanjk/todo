import { createStore } from "vuex";

export default createStore({
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
        TOGGLE_TODO(state, {id, checked}) {
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
    actions: { // method(함수)
        
    },
    getters: { // computed(계산)
        
    }
});