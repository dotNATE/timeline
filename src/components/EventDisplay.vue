<template>
  <div class="event-card">
    <h1 data-testid="title">{{ title }}</h1>
    <div>
      <span data-testid="year-release">{{ yearOfRelease }}</span>
      <span data-testid="year-timeline">{{ yearInTimeline }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    yearOfRelease: String,
    yearInTimeline: String,
  },
};
</script>
