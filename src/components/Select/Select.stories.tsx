import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};


export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Nsk'},
                    {value: '2', title: 'Msk'},
                    {value: '3', title: 'Spb'}
                ]}
        />
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
   return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Nsk'},
                    {value: '2', title: 'Msk'},
                    {value: '3', title: 'Spb'}
                ]}
        />
    </>
}

