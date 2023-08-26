import { Meta, StoryObj } from "@storybook/react";
import PatientProfileHeader from ".";

const meta: Meta<typeof PatientProfileHeader> = {
  title: "PatientProfileHeader",
  component: PatientProfileHeader,
};

export default meta;

type Story = StoryObj<typeof PatientProfileHeader>;

export const Default: Story = {
  args: {},
};
