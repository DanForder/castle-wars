import { customRender } from "../../utils/testUtils";
import NotFound from "./NotFound";

export default describe("NotFound Page", () => {
  it("Renders", () => {
    const { container } = customRender(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
