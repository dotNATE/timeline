<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <pre></pre>
  <router-view />
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    store.dispatch("getEventsFromDb");
  },
};
</script>
