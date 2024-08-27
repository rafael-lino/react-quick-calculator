import type {Meta, StoryObj} from '@storybook/react';

import Calculator from './Calculator';

const meta = {
    title: 'Example/Calculator',
    component: Calculator,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta<typeof Calculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCalculator: Story = {
    args: {
        initOpened: true,
    },
};
