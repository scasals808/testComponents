import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfAccordion} from "./SelfAccordion";

export default {
    title: 'SelfAccordion',
    component: SelfAccordion,
};


export const ModeChanging = () => {
    return <SelfAccordion titleValue={'menu'} />;
}





