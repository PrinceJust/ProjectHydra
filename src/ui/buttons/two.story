import { ArgsTable, Canvas, Meta, Story } from '@storybook/addon-docs';
import ActionButton from './index';


<Meta title="MDX/ActionButtons/hello2" component={ ActionButton }
/>

export const Template = (args) => <ActionButton { ...args } />

# Default button
You can modify this button using **controls**.

<Canvas>
  <Story name="Default" args={
    {
      text : 'Default',
      sizes : 'md',
      variant : 'default',
      disabled : false,
      click: () => {}
    }
  }>
    { Template.bind({ }) }
  </Story>
</Canvas>

