<template>
  <div class="px-6 py-20 pb-4">
    <ReleaseOrder v-slot="events">
      <EventDisplay v-for="event in events" :key="event.title" v-bind="event" />
    </ReleaseOrder>
  </div>
</template>

<script>
import ReleaseOrder from "@/components/event_lists/ReleaseOrder.vue";
import EventDisplay from "@/components/EventDisplay.vue";

export default {
  name: "Timeline",
  components: {
    ReleaseOrder,
    EventDisplay,
  },
};
</script>
