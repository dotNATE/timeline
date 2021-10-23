<template>
  <div data-testid="root" class="flex flex-col space-y-2 event-list">
    <slot v-bind="events"></slot>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const events = computed(() => {
      return store.state.events;
    });

    return { events };
  },
};
</script>
