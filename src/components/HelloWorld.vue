<template>
  <v-container>
    <!-- <v-row class="text-center"> -->
    <draggable v-model="myList" draggable=".item" id="temp" class="row">
      <template v-for="data in myList">
        <Card :name="data.name" :key="data.id" :src="data.src" />
      </template>
    </draggable>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import store from '../store';
import Card from './Card';

export default {
  name: 'HelloWorld',
  store,
  components: {
    draggable,
    Card,
  },
  data: () => ({}),
  computed: {
    myList: {
      get() {
        return this.$store.state.myList;
      },
      set(value) {
        this.$store.commit('updateList', value);
      },
    },
  },
};
</script>
