import { createTheme } from "@mui/material/styles";
import { TypographyStyle } from "@mui/material/styles/createTypography";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#ECD56F",
        },
        secondary: {
            main: "#000000",
        },
        info: {
            main: "#3A3A3A",
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeight: 400,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "unset",
                    borderRadius: "6px",
                },
            },
        },
    },
    typography: {
        title1: {
            fontSize: 35,
            fontWeight: 600,

            "@media only screen and (max-width: 900px)": {
                fontSize: 18,
            },
        },
        title2: {
            fontSize: 30,
            fontWeight: 500,

            "@media only screen and (max-width: 900px)": {
                fontSize: 14,
            },
        },
        title3: {
            fontSize: 20,
            fontWeight: 500,
        },
        title4: {
            fontSize: 16,
            fontWeight: 400,
        },
        title5: {
            fontSize: 24,
            fontWeight: 500,
            "@media only screen and (max-width: 900px)": {
                fontSize: 14,
            },
        },
        body1: {
            fontSize: 24,
            fontWeight: 500,
            "@media only screen and (max-width: 900px)": {
                fontSize: 14,
            },
        },
        body2: {
            fontSize: 28,
            fontWeight: 400,
            "@media only screen and (max-width: 900px)": {
                fontSize: 15,
            },
        },
        body3: {
            fontSize: 16,
            fontWeight: 400,
        },
        body4: {
            fontSize: 19,
            fontWeight: 400,
            "@media only screen and (max-width: 900px)": {
                fontSize: 12,
            },
        },
        body5: {
            fontSize: 18,
            fontWeight: 400,
        },
        body6: {
            fontSize: 15,
            fontWeight: 400,
        },
        body7: {
            fontSize: 13,
            fontWeight: 400,
        },
    },
});
export default theme;

declare module "@mui/material/styles/createTypography" {
    interface Typography {
        title1: TypographyStyle;
        title2: TypographyStyle;
        title3: TypographyStyle;
        title4: TypographyStyle;
        title5: TypographyStyle;
        body3: TypographyStyle;
        body4: TypographyStyle;
        body5: TypographyStyle;
        body6: TypographyStyle;
        body7: TypographyStyle;
    }

    // allow configuration using `createMuiTheme`
    interface TypographyOptions {
        title1?: TypographyStyle;
        title2?: TypographyStyle;
        title3?: TypographyStyle;
        title4?: TypographyStyle;
        title5?: TypographyStyle;
        body3?: TypographyStyle;
        body4?: TypographyStyle;
        body5?: TypographyStyle;
        body6?: TypographyStyle;
        body7?: TypographyStyle;
    }
}

declare module "@mui/material/Typography/Typography" {
    interface TypographyPropsVariantOverrides {
        title1: true;
        title2: true;
        title3: true;
        title4: true;
        title5: true;
        body3: true;
        body4: true;
        body5: true;
        body6: true;
        body7: true;
    }
}
