import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './subMenu';

// 有关默认导出的详细信息: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => (
    <Menu {...args}>
        <MenuItem>
            Menu1
        </MenuItem>
        <MenuItem>
            Menu2
        </MenuItem>
        <SubMenu title='Menu3'>
            <MenuItem>
            Menu3-1
            </MenuItem>
        </SubMenu>
        <SubMenu title='Menu4'>
            <MenuItem>
            Menu4-1
            </MenuItem>
            <MenuItem>
            Menu4-2
            </MenuItem>
        </SubMenu>
    </Menu>
    );

export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical.args = {
    mode: 'vertical',
};
export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {
    mode: 'horizontal',
};


