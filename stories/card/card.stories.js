// Card.stories.js

import { createCard } from './card.js';

export default {
  title: 'Design System/Atoms/Card',
}

const Template = ({ title, size, description }) => { 
  return createCard({ title, size, description  });
};

export const Default = Template.bind({
  title: 'outline',
  size: 'medium',
  description: 'Button',
});

Default.args = {
  title: 'filled',
  size: 'medium',
  description: 'Button',
};