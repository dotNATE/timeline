<template>
  <div>
    <EventList v-slot="events">
      <EventDisplay v-for="event in events" :key="event.title" v-bind="event" />
    </EventList>
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";
import EventDisplay from "@/components/EventDisplay.vue";

export default {
  name: "Home",
  components: {
    EventList,
    EventDisplay,
  },
};
</script>
