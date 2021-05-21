<template>
  <v-col class="item md-6 col" style="width: 200px">
    <v-img height="250" :src="src"></v-img>
    <v-card max-width="344" style="border: 2px solid black">
      {{ name }}
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: Number,
    name: String,
    src: String,
  },
  data() {
    return {};
  },
};
</script>
