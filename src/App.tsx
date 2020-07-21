import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/Onoff";
import {SelfAccordion} from "./components/SelfControlledAccordion/SelfAccordion";
import {SelfRating} from "./components/SelfControledRating/SelfRating";
import {SelfOnOff} from "./components/SelfOnOff/SelfOnOff";


function App() {

   // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [on, setOn] = useState<boolean>(true)



    return (
        <div className='App'>
            {/*<OnOff on={on} onChange={setOn}/>*/}
            {/*<SelfOnOff/>*/}
            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*    />*/}
            {/*<SelfAccordion titleValue={'menu'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<SelfRating/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;