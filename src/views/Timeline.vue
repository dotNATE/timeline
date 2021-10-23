<template>
  <div class="relative flex flex-col justify-between flex-1 overflow-auto">
    <main class="flex-1"></main>
    <ReleaseOrder v-slot="events">
      <div class="flex p-2 space-x-2 event-list">
        <EventDisplay
          v-for="event in events"
          :key="event.title"
          v-bind="event"
        />
      </div>
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
