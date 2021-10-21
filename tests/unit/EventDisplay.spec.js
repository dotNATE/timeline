import { mount } from "@vue/test-utils";
import EventDisplay from "@/components/EventDisplay.vue";

describe("EventDisplay", () => {
  it("renders the event card", () => {
    const wrapper = mount(EventDisplay);
    const eventCardExists = wrapper.find(".event-card").exists();

    expect(eventCardExists).toBe(true);
  });

  it("renders event name", () => {
    const testText = "Test Title";
    const wrapper = mount(EventDisplay, {
      props: {
        title: testText,
      },
    });
    const titleText = wrapper.find('[data-testid="title"]').text();
    expect(titleText).toEqual(testText);
  });

  it("renders year of release", () => {
    const testText = "Event Test";
    const wrapper = mount(EventDisplay, {
      props: {
        yearOfRelease: testText,
      },
    });
    const releaseYearText = wrapper.find('[data-testid="year-release"]').text();
    expect(releaseYearText).toEqual(testText);
  });

  it("renders year in timeline", () => {
    const testText = "Event Test";
    const wrapper = mount(EventDisplay, {
      props: {
        yearInTimeline: testText,
      },
    });
    const timelineYear = wrapper.find('[data-testid="year-timeline"]').text();
    expect(timelineYear).toEqual(testText);
  });
});
