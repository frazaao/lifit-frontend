import { Meta, StoryObj } from "@storybook/react";
import FormControl from ".";

const meta: Meta<typeof FormControl> = {
  title: "FormControl",
  component: FormControl,
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {},
};
