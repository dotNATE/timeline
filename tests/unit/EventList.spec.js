import { createStore } from "vuex";
import { mount } from "@vue/test-utils";

import EventList from "@/components/EventList";

const mockEvent = {
  title: "Iron Man",
  yearOfRelease: "2008",
  yearInTimeline: "2010",
};

const store = createStore({
  state() {
    return {
      events: [mockEvent],
    };
  },
});

const factory = (slots) => {
  return mount(EventList, {
    global: {
      plugins: [store],
    },
    slots: {
      ...slots,
    },
  });
};

describe("EventList", () => {
  it("renders a default slot", () => {
    const slots = {
      default: '<div class="test">test</div>',
    };
    const wrapper = factory(slots);
    const slotExists = wrapper.find(".test").exists();
    expect(slotExists).toBe(true);
  });

  it("gets events from a mock store and makes them available to desfault slot", () => {
    const slots = {
      default: "<template #default='events'>{{events[0].title}}</template>",
    };
    const wrapper = factory(slots);
    const slottedText = wrapper.find(".event-list").text();
    expect(slottedText).toEqual(mockEvent.title);
  });
});
