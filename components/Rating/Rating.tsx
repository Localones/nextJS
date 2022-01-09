import {RatingProps} from "./Rating.props";
import React, {useEffect, useState} from "react";
import styles from "./Rating.module.css";
import Star from './star.svg';
import cn from 'classnames';

export const Rating = ({children, isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <Star className={cn(styles.star, {
                    [styles.fill]: i < currentRating
                })}
                />
            )
        });
        setRatingArray(updatedArray);
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    )
}