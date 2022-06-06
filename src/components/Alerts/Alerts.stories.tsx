import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert,{AlertType} from './Alert';

// 有关默认导出的详细信息: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
alertType: AlertType.Primary,
visible:true,
};
export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
alertType: AlertType.Danger,
visible:true
};
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
alertType: AlertType.Info,
visible:true
};
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
alertType: AlertType.Secondary,
};
export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
alertType: AlertType.Success,
};
export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
alertType: AlertType.Warning,
};

