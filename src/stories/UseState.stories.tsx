import React, {useMemo, useState} from "react";

export default {
    title: ' UseState demo'
}

function generateData() {
    console.log('generateData')
    return 1;
}

export const Example1 = () => {
    console.log('Example')

    // const InitValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)
//засовываем функцию в юзстейт чтобы реакт вызвал ее всего лишь один раз (для тяжелых синхронных подсчетов)


    return <>
        <button onClick={() => {
            setCounter(state => state + 1)
            //реакт не умеет сохранять функции
            //
        }}>+
        </button>
        {counter}
    </>
}