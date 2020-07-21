import React, {ChangeEvent, useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'input',
};

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const[value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null) // создаем ссылку
    const save = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    }
    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual Value: {value} </>;
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(event) => { setParentValue(event.currentTarget.value)}}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type='checkbox' checked={parentValue} onChange={(event) => { setParentValue(event.currentTarget.checked)}}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option >none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Novosibirsk</option>
    </select>
}

export const ControlledInputWithFixedValues = () => <input value={'GOGO'}/>
