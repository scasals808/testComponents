import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"App component"}/>
            <PageTitle title={"Users"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed = {true}/>
            <Accordion titleValue={"List"} collapsed = {false}/>
            Article 2
            <Rating value={2}/>
        </div>
    );
}

type PageTitlePropsType ={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;