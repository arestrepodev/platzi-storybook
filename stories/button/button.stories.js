// Button.stories.js
import { withActions } from '@storybook/addon-actions/decorator';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { createButton } from './button.js';

export default {
  title: 'Design System/Atoms/Button',
  decorators:  [(story) => {
    const decorator = document.createElement('div')
    decorator.style.margin = '24px'
    decorator.appendChild(story())
    return decorator
  }], 
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#222222' },
        { name: 'light', value: '#ffffff' },
        { name: 'black-friday', value: 'purple' },
      ],
    },
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'Button label',
      defaultValue: 'Click me!',
      control: {
        type: 'text',
      }
    },
    style: {
      name: 'style',
      description: 'Button style',
      options: ['filled', 'outline'],
      defaultValue: 'filled',
      control: {
        type: 'radio',
      }
    },
    size: {
      name: 'size',
      description: 'Button size',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      }
    },
    onClick: {
      action: 'onClick',
      description: 'Button click handler',
    },
  },
  decorators: [withActions],
}

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

export const Default = Template.bind({})
Default.args = {
  label: 'Button'
}

Default.play = async ({args, canvasElement}) => { 
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Button')).toBeInTheDocument();
}