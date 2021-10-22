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

describe("EventList", () => {
  it("renders a default slot", () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store],
      },
      slots: {
        default: '<div class="test">test</div>',
      },
    });

    const slotIsTrue = wrapper.find(".test").exists();

    expect(slotIsTrue).toBe(true);
  });
});
