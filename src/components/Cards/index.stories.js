import React from 'react'
import { About } from './index'

export default {
  component: About,
  title: 'About'
}

const Template = (args) => <About {...args} />

export const Default = Template.bind({})

Default.args = {
  title: true,
  label: 'About'
}
