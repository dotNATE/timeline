import { mount } from "@vue/test-utils";
import EventDisplay from "@/components/EventDisplay.vue";

const factory = (props) => {
  return mount(EventDisplay, {
    props: {
      ...props,
    },
  });
};

const mockEvent = {
  Title: "Iron Man",
  Year: "2009",
  Released: "26 Apr 2019",
  Runtime: "2h 6m",
  Director: "Anthony Russo, Joe Russo",
  Writer:
    "Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
  imdbID: "tt4154796",
  Type: "movie",
};

const wrapper = factory(mockEvent);

describe("EventDisplay", () => {
  it("renders the event card", () => {
    const eventCardExists = wrapper.find(".event-card").exists();
    expect(eventCardExists).toBe(true);
  });

  it("renders event name", () => {
    const titleText = wrapper.find('[data-testid="title"]').text();
    expect(titleText).toEqual(mockEvent.Title);
  });

  it("renders year of release", () => {
    const releaseYearText = wrapper.find('[data-testid="year-release"]').text();
    expect(releaseYearText).toEqual(mockEvent.Released);
  });

  it("renders year in timeline", () => {
    const timelineYear = wrapper.find('[data-testid="year-timeline"]').text();
    expect(timelineYear).toEqual(mockEvent.Year);
  });
});
