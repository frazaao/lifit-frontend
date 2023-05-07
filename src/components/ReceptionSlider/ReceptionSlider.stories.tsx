import { Meta, StoryObj } from "@storybook/react";
import ReceptionSlider from ".";

const meta: Meta<typeof ReceptionSlider> = {
  title: "ReceptionSlider",
  component: ReceptionSlider,
};

export default meta;

type Story = StoryObj<typeof ReceptionSlider>;

export const Default: Story = {
  args: {},
};
