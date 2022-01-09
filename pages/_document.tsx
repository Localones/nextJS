import React from "react";
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class Mydocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <title>My top</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default Mydocument;

