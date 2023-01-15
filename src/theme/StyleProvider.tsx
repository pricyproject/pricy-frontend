import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import * as React from "react";
import theme from "./theme";
import createEmotionCache from "./createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface Props {
    children: React.ReactNode;
    emotionCache: EmotionCache | undefined;
}

const StyleProvider: React.FC<Props> = ({
    children,
    emotionCache = clientSideEmotionCache,
}) => {
    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </StyledEngineProvider>
    );
};
export default StyleProvider;
