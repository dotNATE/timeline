<template>
  <div class="event-list">
    <slot v-bind="events"></slot>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const events = ref([]);

    onMounted(async () => {
      const response = await EventService.getEvents();
      events.value = response.data;
    });

    return { events };
  },
};
</script>
