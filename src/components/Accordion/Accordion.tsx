import React from 'react';

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
   if (props.collapsed === false) {
       return (
           <div>
               <AccordionTitle title={props.titleValue}/>
           </div>
       )
   } else {
       return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody />
        </div>
    )}
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}


export default Accordion;