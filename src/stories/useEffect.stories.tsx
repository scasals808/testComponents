import React, {useEffect, useState} from "react";

export default {
    title: ' UseEffect demo'
}

export const SimpleExample1 = () => {
    console.log('SimpleExample1')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    //хук для сайдэффектов, замена жизненному циклу классовой компоненты
    //сначала отрисовка контента, потом юзэффект

    useEffect(() => {
        document.title = counter.toString()
    })
    //если не передаем зависимости, юзеффект запускается при каждом рендере компоненты

    useEffect(() => {
        document.title = counter.toString()
    }, [])
    //если в зависимостях пустой массив, то юзэффект сработает при первом рендере компоненты

    useEffect(() => {
        document.title = counter.toString()
    }, [counter])
    //если в зявисимочтях меняются данные юзэффект срабатывает при смене данных


    return <>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter}{fake}
    </>
}

export const SetTimeoutExample1 = () => {
    console.log('SetTimeoutExample1')
    const [counter, setCounter] = useState(1)
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

    }, [])

    return <>
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        Hello, Counter: {counter}
    </>
}