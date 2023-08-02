
import {Preview} from "@storybook/react";
import {StyleDecorator} from "../src/shared/storybook/styleDecorator";

const preview: Preview = {
  decorators: [StyleDecorator],
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