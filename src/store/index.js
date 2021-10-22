import { createStore } from "vuex";
import EventService from "@/services/EventService.js";

export default createStore({
  state: {
    events: [],
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    async getEventsFromDb({ commit }) {
      const response = await EventService.getEvents();
      if (Array.isArray(response.data)) {
        commit("SET_EVENTS", response.data);
      }
    },
  },
  modules: {},
});
