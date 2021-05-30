import React from 'react';
import Home from './index';

export default {
    component: Home,
    title: 'Home',
}

const Template = () => <Home/>

export const Default = Template.bind({})

Default.args = {
    title: true,
    label: 'Home'
}

