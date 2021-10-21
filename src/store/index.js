import { createStore } from "vuex";
import EventService from "@/services/EventService.js";

export default createStore({
  state: {
    events: [],
  },
  mutations: {
    async FETCH_EVENTS(state) {
      state.events = await EventService.getEvents();
    },
  },
  actions: {},
  modules: {},
});
