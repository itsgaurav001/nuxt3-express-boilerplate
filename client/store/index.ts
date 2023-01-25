/* import state from './todos/state'
import getters from './todos/getters'
import actions from './todos/actions'
import mutations from './todos/mutations'
 */

import Todo from '../types/todos';

export const useTodosStore = defineStore('TodosStore', {
  // id: '',
  // arrow function recommended for full type inference
  state: () => {
    return {
      todos: [/* {
        "id": 1,
        name: "Todo1",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        name: "Todo2",
        description: "abc"
      } */] as any
    }
  },
  getters: {
    getTodos(state) {
      return state.todos
    }
  },
  actions: {
    async populateTodos() {
      const response = await useFetch(`/api/todos`)
      this.todos = response.data.value;
      // console.log(this.todos)
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
}