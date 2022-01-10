import {LayoutProps} from "./Layout.props";
import React, {FunctionComponent} from "react";
import styles from "./Layout.module.css";
import cn from 'classnames';
import {Sidebar, Footer, Header} from "./index";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    };
}