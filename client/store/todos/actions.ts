export default {
    async populateTodos(state:any) {
        const response: any = await useFetch(`/api/todos`);
        console.log(response.data.value)
        state.todos = response.data.value;
    }
}