import React, {useEffect, useState} from "react";

type PropsType = {}



export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

         const intervalId = setInterval(() => {
             setDate(new Date())
         }, 1000)

        return () => {
             clearInterval(intervalId) // чтобы не было утечки памяти
        }
     })

    const  get2digitsString = (number: number) => number < 10 ? '0'+ number : number

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}