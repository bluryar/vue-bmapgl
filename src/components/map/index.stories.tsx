import type { Meta, StoryObj } from '@storybook/vue3';

import Map from './index.vue';

const meta = {
  title: 'Map/Map',
  component: Map,
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapStory: Story = {
  args: {},
};
