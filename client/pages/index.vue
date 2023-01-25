<template>
  <v-container>
    <v-btn class="my-5">The Button</v-btn>
    <div>
      <div width="400" prepend-icon="mdi-home">
        <div>Hello from Vuetify!</div>
        <div>When you see this inside a card, it worked!</div>
      </div>
    </div>
    <div>
      <v-btn class="mt-5" @click="showMessageFromBackend"
        >Show message from backend
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </div>
    <template v-if="todos">
      <v-row class="my-5">
        <v-col
          v-for="(todo, index) in todos"
          :key="index"
          cols="12"
          sm="2"
          xs="12"
          lg="3"
          xl="4"
        >
          <v-card elevation="6">
            <v-card-title>{{ todo.name }}</v-card-title>
            <v-card-text>{{ todo.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
/*
import Todo from '../types/todos'
import { Ref } from "vue";

const todos = ref() as Ref<Todo[]>;
 */

import { useTodosStore } from "~/store";

const todosStore = useTodosStore();

const todos = computed(() => todosStore.getTodos);

const showMessageFromBackend = () => {
  // const response = await useFetch(`/api/test/?data=${data.test}`);
  // const response: any = useFetch(`/api/todos`);
  todosStore.populateTodos().then(() => {
    console.log(todosStore.getTodos);
  });
  // console.log(response.data.value.message)
};
</script>
