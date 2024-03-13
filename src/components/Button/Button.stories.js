import React from "react";
import Button from './Button.js';

export default {
    title: 'Form/Button', // should be unique
    component: Button
};

export const Primary = () => <Button variant= 'primary'>Primary</Button>;
export const Secondary = () => <Button variant= 'secondary' >Secondary</Button> ;
export const Success = () => <Button variant="success" >Success</Button> ;
export const Danger = () => <Button variant = "danger" >Danger</Button>;

const Template = (args) => <Button {...args}>{args.name}</Button>

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    label: 'Click me!',
    children: 'Primary Args',
    name: 'Primary A'
};

export const Somebutton = Template.bind({});
Somebutton.args = {
    variant: 'danger',
    // name: 'Danger'
    children: Danger
} 




