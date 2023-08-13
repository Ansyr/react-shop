import {Preview} from "@storybook/react";
import {StyleDecorator} from "../src/shared/config/storybook/style-decorator";
import {RouteDecorator} from "../src/shared/config/storybook/route-decorator";

const preview: Preview = {
  decorators: [StyleDecorator,RouteDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;