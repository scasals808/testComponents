import React from "react";

type RatingPropsType = {
    value: number
}

function Rating(props: RatingPropsType) {
    return(
        <div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType){
    if (props.selected === true){
       return <span><b>star</b> </span>
    } else {
       return <span>star </span>
    }
}
export default Rating;