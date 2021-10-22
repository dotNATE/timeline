import { mount } from "@vue/test-utils";
import EventList from "@/components/EventList.vue";

jest.mock("@/services/EventService");

describe("EventList", () => {
  it("renders the component", () => {
    const wrapper = mount(EventList);
    const outerElementExists = wrapper.find(".event-list").exists();

    expect(outerElementExists).toBe(true);
  });

  it("has a slot element", () => {
    const wrapper = mount(EventList, {
      slots: {
        default: '<div class="test"></div>',
      },
    });
    const slotElementExists = wrapper.find(".test").exists();

    expect(slotElementExists).toBe(true);
  });

  // it("fetches events from the json db", async () => {
  //   expect(true).toBe(true);
  // });

  // it("passes event data into slot element as props", () => {
  //   expect(true).toBe(true);
  // });
});
