import {FooterProps} from "./Footer.props";
import React from "react";
import styles from "./Footer.module.css";
import cn from 'classnames';

export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    )
}