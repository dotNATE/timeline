<template>
  <div
    class="relative grid h-64 max-w-md grid-cols-2 mx-auto overflow-hidden text-white bg-black rounded-md cursor-pointer  event-card"
  >
    <div class="flex flex-col p-4">
      <h1 class="z-10" data-testid="title">{{ Title }}</h1>
    </div>

    <div class="relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-black to-transparent"
      ></div>
      <img :src="Poster" :alt="`${imdbID}_img`" />
    </div>

    <table class="absolute left-0 z-10 flex flex-col w-3/4 pl-4 bottom-4">
      <tr class="flex flex-col">
        <td class="text-gray-300">MCU Year:</td>
        <td data-testid="year-timeline">{{ Year }}</td>
      </tr>
      <tr class="flex flex-col">
        <td class="text-gray-300">Release Date:</td>
        <td data-testid="year-release">{{ Released }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    Title: String,
    Released: String,
    Year: String,
    Poster: String,
    imdbID: String,
  },
};
</script>
