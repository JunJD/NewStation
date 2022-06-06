import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button,{ButtonType,ButtonSize} from './Button';

// 有关默认导出的详细信息: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: ButtonType.Primary,
};

export const Default = Template.bind({});
Default.args = {
    btnType: ButtonType.Default,
};
export const Danger = Template.bind({});
Danger.args = {
    btnType: ButtonType.Danger,
};
export const Info = Template.bind({});
Info.args = {
    btnType: ButtonType.Info,
};
export const Link = Template.bind({});
Link.args = {
    btnType: ButtonType.Link,
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Lg,
};

export const Small = Template.bind({});
Small.args = {
    size: ButtonSize.Sm,
};
