import React from 'react'
import Card from './index'

export default {
  component: Card,
  title: 'Card'
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  title: true,
  label: 'Card'
}
