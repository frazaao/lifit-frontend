import { Meta, StoryObj } from "@storybook/react";
import Toast from ".";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
};
