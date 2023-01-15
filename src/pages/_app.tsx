import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import ReduxProvider from "../store/ReduxProvider";
import StyleProvider from "../theme/StyleProvider";
import "../theme/global.css";
import DefaultLayout from "../Layout/DefaultLayout";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

interface MyAppProps extends AppProps {
    emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = undefined, pageProps } = props;

    return (
        <ReduxProvider>
            <StyleProvider emotionCache={emotionCache}>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </StyleProvider>
        </ReduxProvider>
    );
}
