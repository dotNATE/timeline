import { createStore } from "vuex";
import { mount } from "@vue/test-utils";

import ReleaseOrder from "@/components/event_lists/ReleaseOrder";

const mockEvents = [
  {
    title: "Iron Man",
    year: "2009",
    released: "26 Apr 2019",
    runtime: "2h 6m",
    director: "Anthony Russo, Joe Russo",
    writer:
      "Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
    imdbID: "tt4154796",
    type: "movie",
  },
];

const store = createStore({
  state() {
    return {
      events: mockEvents,
    };
  },
});

const factory = (slots) => {
  return mount(ReleaseOrder, {
    global: {
      plugins: [store],
    },
    slots: {
      ...slots,
    },
  });
};

describe("ReleaseOrder", () => {
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
    const slotText = wrapper.find("[data-testid='root']").text();
    expect(slotText).toEqual(mockEvents[0].title);
  });
});
