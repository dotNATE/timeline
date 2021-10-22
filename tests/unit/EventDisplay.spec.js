import { mount } from "@vue/test-utils";
import EventDisplay from "@/components/EventDisplay.vue";

const factory = (props) => {
  return mount(EventDisplay, {
    props: {
      ...props,
    },
  });
};

const titleText = "Test Title";
const releaseText = "Test Release Year";
const timelineText = "Test Timeline Year";

const wrapper = factory({
  title: titleText,
  yearOfRelease: releaseText,
  yearInTimeline: timelineText,
});

describe("EventDisplay", () => {
  it("renders the event card", () => {
    const eventCardExists = wrapper.find(".event-card").exists();
    expect(eventCardExists).toBe(true);
  });

  it("renders event name", () => {
    const titleText = wrapper.find('[data-testid="title"]').text();
    expect(titleText).toEqual(titleText);
  });

  it("renders year of release", () => {
    const releaseYearText = wrapper.find('[data-testid="year-release"]').text();
    expect(releaseYearText).toEqual(releaseText);
  });

  it("renders year in timeline", () => {
    const timelineYear = wrapper.find('[data-testid="year-timeline"]').text();
    expect(timelineYear).toEqual(timelineText);
  });
});
