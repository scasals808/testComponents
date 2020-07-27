import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('Accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const CollapsedMode = () => <Accordion
    titleValue={'menu'}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}/>;
export const UncollapsedMode = () => <Accordion
    titleValue={'menu'}
    collapsed={false}
    onChange={callback}
    items={
        [
            {title: 'Vova', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Tima', value: 3}
        ]
    }
    onClick={onClickCallback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'menu'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
                {title: 'Vova', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Tima', value: 3}
            ]}
        onClick={(value) => {
            alert(`users with ID ${value} should be happy `)
        }}/>
};





