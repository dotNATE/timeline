<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.commit("FETCH_EVENTS");
    });
  },
};
</script>
