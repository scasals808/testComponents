import React, {useEffect, useState} from "react";
import {Clock} from './Clock'

export default {
    title: ' Clock demo',
    component: Clock,
}

// export const ClockExample1 = () => {
//     const [date, setDate] = useState(new Date())
//
//     function sec() {
//         setDate(new Date())
//     }
//     useEffect(() => {
//         setInterval(() => sec(), 1000)
//     })
//
//     return <>
//         It is {date.toLocaleTimeString()}
//     </>
// }

export const ClockExample2 = () => {

    return <>
        It is <Clock/>
    </>
}