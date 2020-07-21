import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfOnOff} from "./SelfOnOff";

export default {
    title: 'SelfOnOff stories',
    component: SelfOnOff,
};
const callback = action('on or off')

export const OnMode = () => {
    return <SelfOnOff defaultOn={true} onChange={callback}/>;
}
export const OFFMode = () => {
    return <SelfOnOff defaultOn={false} onChange={callback}/>;
}

export const defaultInputValue = () => <input defaultValue={'yo'}/>;





