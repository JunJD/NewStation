import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs,{TabsType} from './Tabs';
import TabItem from './TabItem';

// 有关默认导出的详细信息: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args}>
        <TabItem>
            Menu
        </TabItem>
    </Tabs>
    );

export const Plaintext = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plaintext.args = {
    tabsType: TabsType.Plaintext,
};


