<template>
  <div class="absolute inset-0 flex bg-gray-100">
    <div
      id="nav"
      class="fixed inset-x-0 z-20 flex items-center h-16 pl-6 bg-white shadow-md "
    >
      <router-link to="/">Timeline</router-link>
    </div>
    <div class="flex mt-16">
      <router-view />
    </div>
  </div>
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
