import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('Accordion mode change event fired');

export const CollapsedMode = () => <Accordion titleValue={'menu'} collapsed={true} onChange={callback}/>;
export const UncollapsedMode = () => <Accordion titleValue={'menu'} collapsed={false} onChange={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'menu'} collapsed={value} onChange={() => setValue(!value)}/>;
}





