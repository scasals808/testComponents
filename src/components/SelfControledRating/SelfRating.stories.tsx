import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfRating} from "./SelfRating";
import Rating from "../Rating/Rating";

export default {
    title: 'SelfRating stories',
    component: SelfRating,
};

const callback = action('star clicked')
export const EmptyStars = () => <SelfRating defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <SelfRating defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <SelfRating defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <SelfRating defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <SelfRating defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <SelfRating defaultValue={5} onChange={callback}/>;







