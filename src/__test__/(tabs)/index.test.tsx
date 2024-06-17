import Home from "@/app/(club)";
import { render } from "@testing-library/react-native";

describe("Home", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render text and button correctly", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("label-home")).toBeDefined();
    expect(getByTestId("button-label-home")).toBeDefined();
  });
});
