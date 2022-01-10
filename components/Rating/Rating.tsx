import {RatingProps} from "./Rating.props";
import React, {useEffect, useState, KeyboardEvent} from "react";
import styles from "./Rating.module.css";
import Star from './star.svg';
import cn from 'classnames';

export const Rating = ({children, isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span onMouseEnter={() => changeDisplay(index + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClick(index + 1)}>

                    <Star className={cn(styles.star, {
                        [styles.fill]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                          tabIndex={isEditable ? 0 : -1}
                          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>
            )
        });
        setRatingArray(updatedArray);
    }


    const changeDisplay = (index: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(index);
    }

    const onClick = (index: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(index);
    }

    const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(index);
    }

    return (
        <div {...props}>
            {ratingArray.map((rating, index) => (
                <span key={index}>{rating}</span>
            ))}
        </div>
    )
}